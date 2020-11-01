import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { SwapiSeviceProvider } from "../swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage,
} from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StarshipDetails from "../sw-component/starship-details";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };
  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return { swapiService: new Service() };
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <ErrorBoundry>
        <SwapiSeviceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet updateInterval={20000} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <h2>Welcome to StarDB</h2>}
                />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route exact path="/starships" component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage onLogin={this.onLogin} isLoggedIn={isLoggedIn} />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                />
                <Route render={() => <h2>Page not found!</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiSeviceProvider>
      </ErrorBoundry>
    );
  }
}
