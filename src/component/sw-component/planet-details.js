import React from "react";
import ItemDetails, {Record} from "../item-details";
import {SwapiSeviceConsumer} from "../swapi-service-context"


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

export {PlanetDetails}