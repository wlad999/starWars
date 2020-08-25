import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row/index";

import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = { selectedPerson: 3 };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = <PersonDetails itemId={this.state.selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
