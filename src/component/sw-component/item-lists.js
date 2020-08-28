import React from "react";
import ItemList from "../item-list";
import {withData} from "../hoc-helper/with-data";
import SwapiService from "../../services/swapi-service";

const swapiServise = new SwapiService()
const {getAllPeople, getAllStarships, getAllPlanets} = swapiServise

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}
const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;
// const ListWithChildren = withChildFunction(ItemList, ({name}) => <span>{name}</span>)


const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople)

const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets)

const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), getAllStarships)


export {PersonList, PlanetList, StarshipList}