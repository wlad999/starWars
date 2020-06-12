import React, { Component } from "react";


import "./random-planet.css";

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img
        alt="random planet"
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/5.jpg`}
        />
        <div>
          <h4>PLanet name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>234532452</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>34523523</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>2342344</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
