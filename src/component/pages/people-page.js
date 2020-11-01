import React, { Component } from "react";
import { PersonDetails, PersonList } from "../sw-component";
import Row from "../row";
import Paginations from "../pagination";

export default class StarshipsPage extends Component {
  state = {
    selectedItem: null,
    page: 1,
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
            <PersonList
              onItemSelected={this.onItemSelected}
              page={page}
              onTotalItemsSet={this.onTotalItemsSet}
            />
          }
          right={<PersonDetails itemId={selectedItem} />}
        />
        <Paginations count={count} onPageSet={this.onPageSet} page={page} />
      </>
    );
  }
}
