import React from "react";
import ItemDetails, {Record} from "../item-details";
// import {SwapiSeviceConsumer} from "../swapi-service-context"
import {withSwapiService} from "../hoc-helper"


const PersonDetails = ({itemId, swapiService}) => {
    const {getPerson, getPersonImage} = swapiService
    // return (
    // <SwapiSeviceConsumer>
    //     {({getPerson, getPersonImage}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getPerson}
                     getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )
    // }}
    // </SwapiSeviceConsumer>
    // )
}


export default withSwapiService(PersonDetails)