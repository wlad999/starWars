import React, { Component } from "react";
import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {
  state = {
    selectedPerson: 5,
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
