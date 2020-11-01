import React, { Component } from "react";
import { PlanetDetails, PlanetList } from "../sw-component";
import Row from "../row";
import Paginations from "../pagination";

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null,
    page: 2,
    count: 1,
  };
  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem,
    });
  };
  onTotalItemsSet = (count) => {
    this.setState({
      count,
    });
  };
  onPageSet = (page) => {
    this.setState({
      page,
    });
  };

  render() {
    console.log("this.state", this.state);
    const { selectedItem, page, count } = this.state;
    return (
      <>
        <Row
          left={
            <PlanetList
              onItemSelected={this.onItemSelected}
              page={page}
              onTotalItemsSet={this.onTotalItemsSet}
            />
          }
          right={<PlanetDetails itemId={selectedItem} />}
        />
        <Paginations count={count} onPageSet={this.onPageSet} page={page} />
      </>
    );
  }
}
