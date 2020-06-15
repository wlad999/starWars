import React, { Component } from "react";
import Header from "../header";
import PeoplePage from "../people-page";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
