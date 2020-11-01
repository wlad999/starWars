import React, { Component } from "react";
import { PlanetDetails, PlanetList } from "../sw-component";
import Row from "../row";
import Paginations from "../pagination";

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null,
    page: 2,
  };
  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem,
    });
  };

  render() {
    const { selectedItem, page } = this.state;
    return (
      <>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected} page={page} />}
          right={<PlanetDetails itemId={selectedItem} />}
        />
        <Paginations />
      </>
    );
  }
}
