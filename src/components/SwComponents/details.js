import React from "react";
import ItemDetails from "../ItemDetails";
import Record from "../Record";

import SwapiService from "../../services/service";
const swapi = new SwapiService();

const PersonDetails = (props) => {
  return (
    <ItemDetails
      requestName={"getPerson"}
      itemId={props.itemId}
      getImage={swapi.getImagePerson}
    >
      <Record label={"Name"} field={"name"} />
      <Record label={"Gender"} field={"gender"} />
      <Record label={"Eye color"} field={"eyeColor"} />
      <Record label={"Birth year"} field={"birthYear"} />
    </ItemDetails>
  );
};
const PlanetDetails = (props) => {
  return (
    <ItemDetails
      requestName={"getPlanet"}
      itemId={props.itemId}
      getImage={swapi.getImagePlanet}
    >
      <Record label={"Name"} field={"name"} />
      <Record label={"Population"} field={"population"} />
      <Record label={"Rotation Period"} field={"rotationPeriod"} />
      <Record label={"Diameter"} field={"diameter"} />
    </ItemDetails>
  );
};
const StarshipDetails = (props) => {
  return (
    <ItemDetails
      requestName={"getStarship"}
      itemId={props.itemId}
      getImage={swapi.getImageStarship}
    >
      <Record label={"Name"} field={"name"} />
      <Record label={"Model"} field={"model"} />
      <Record label={"Manufacturer"} field={"manufacturer"} />
      <Record label={"Cost"} field={"costInCredits"} />
      <Record label={"Length"} field={"length"} />
      <Record label={"Crew"} field={"crew"} />
      <Record label={"Passengers"} field={"passengers"} />
      <Record label={"Cargo capacity"} field={"cargoCapacity"} />
    </ItemDetails>
  );
};

export { PersonDetails, StarshipDetails, PlanetDetails };
