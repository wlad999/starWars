import React, { Component } from "react";
import Paginations from "../pagination";

import { StarshipList, StarshipDetails } from "../sw-component";
import Row from "../row";

export default class StarshipsPage extends Component {
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
    const { selectedItem, page, count } = this.state;
    return (
      <>
        <Row
          left={
            <StarshipList
              onItemSelected={this.onItemSelected}
              page={page}
              onTotalItemsSet={this.onTotalItemsSet}
            />
          }
          right={<StarshipDetails itemId={selectedItem} />}
        />
        <Paginations count={count} onPageSet={this.onPageSet} page={page} />
      </>
    );
  }
}
