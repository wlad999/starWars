import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import {SwapiSeviceProvider} from "../swapi-service-context"
import DummySwapiService from "../../services/dummy-swapi-service";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages"
import {BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component {
    state = {
        swapiService: new SwapiService()
    }


    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
            return {swapiService: new Service()}
        })
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiSeviceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet updateInterval={20000}/>
                            <Route exact path="/" render={() => <h2>Welcome to StarDB</h2>}/>
                            <Route path="/people" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetsPage}/>
                            <Route path="/starships" component={StarshipsPage}/>
                        </div>
                    </Router>
                </SwapiSeviceProvider>
            </ErrorBoundry>
        );
    }
}
