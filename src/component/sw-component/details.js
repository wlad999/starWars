import React from "react";
import ItemDetails, {Record} from "../item-details";
import {SwapiSeviceConsumer} from "../swapi-service-context"


const PersonDetails = ({itemId}) => {
    return (
        <SwapiSeviceConsumer>
            {({getPerson, getPersonImage}) => {
                return (
                    <ItemDetails itemId={itemId}
                                 getData={getPerson}
                                 getImageUrl={getPersonImage}>
                        <Record field="gender" label="Gender"/>
                        <Record field="eyeColor" label="Eye Color"/>
                    </ItemDetails>
                )
            }}
        </SwapiSeviceConsumer>
    )
}

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiSeviceConsumer>{({getPlanet, getPlanetImage}) => {
            return (
                <ItemDetails itemId={itemId}
                             getData={getPlanet}
                             getImageUrl={getPlanetImage}>
                    <Record field="population" label="Population"/>
                    <Record field="rotationPeriod" label="Rotation Period"/>
                    <Record field="diameter" label="Diameter"/>
                </ItemDetails>
            )
        }}</SwapiSeviceConsumer>
    )
}
const StarshipDetails = ({itemId}) => {
    return (
        <SwapiSeviceConsumer>{({getStarship, getStarshipImage}) => {
            return (
                <ItemDetails itemId={itemId}
                             getData={getStarship}
                             getImageUrl={getStarshipImage}>
                    <Record field="model" label="Model"/>
                    <Record field="length" label="Length"/>
                    <Record field="costInCredits" label="Cost"/>
                </ItemDetails>
            )
        }}
        </SwapiSeviceConsumer>
    )
}


export {PersonDetails, PlanetDetails, StarshipDetails}