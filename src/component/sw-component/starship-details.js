import React from "react";
import ItemDetails, {Record} from "../item-details";
import {SwapiSeviceConsumer} from "../swapi-service-context"

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


export {StarshipDetails}