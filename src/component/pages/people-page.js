import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { PersonDetails, PersonList } from "../sw-component";
import Row from "../row";
import Paginations from "../pagination";

//const PeoplePage = ({ history, match }) => {
//  const { id } = match.params;

//  return (
//    <Row
//      left={<PersonList onItemSelected={(id) => history.push(id)} />}
//      right={<PersonDetails itemId={id} />}
//    />
//  );
//};

//export default withRouter(PeoplePage);

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
