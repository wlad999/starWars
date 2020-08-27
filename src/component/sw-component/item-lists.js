import React from "react";
import ItemList from "../item-list";
import {withData} from "../hoc-helper/withData";
import SwapiService from "../../services/swapi-service";

const swapiServise = new SwapiService()
const {getAllPeople, getAllStarships, getAllPlanets} = swapiServise


const PersonList = withData(ItemList, getAllPeople)

const PlanetList = withData(ItemList, getAllPlanets)

const StarshipList = withData(ItemList, getAllStarships)


export {PersonList, PlanetList, StarshipList}