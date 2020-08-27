import React, {Component} from "react";
import Header from "../header";
import PeoplePage from "../people-page";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetails, {Record} from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row/index";
import {PersonList, PlanetList, StarshipList} from "../sw-component";
import {PersonDetails, PlanetDetails, StarshipDetails} from "../sw-component"

export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;
        const personDetails = <ItemDetails itemId={11}
                                           getData={getPerson}
                                           getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>;
        const starshipDetails = <ItemDetails itemId={5}
                                             getData={getStarship}
                                             getImageUrl={getStarshipImage}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>;

        return (
            <ErrorBoundry>
                <Header/>
                <Row left={personDetails} right={starshipDetails}/>
                <PersonDetails itemId={11}/>
                <StarshipDetails itemId={5}/>
                <PlanetDetails itemId={5}/>
                {/*<RandomPlanet />*/}
                {/*<PeoplePage />*/}
                {/*<div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => (
                <span>
                  {item.name} <button>!</button>
                </span>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>*/}
                <div className="row mb2">
                    <div className="col-md-6">
                        <PersonList/>
                        <StarshipList/>
                        <PlanetList/>
                    </div>
                </div>
            </ErrorBoundry>
        );
    }
}
