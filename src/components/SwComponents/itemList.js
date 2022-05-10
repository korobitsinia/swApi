import React from "react";
import ItemList from "../ItemList";

const PeopleList = (props) => {
  return (
    <ItemList onItemSelect={props.onPersonSelect} requestName={"getAllPeople"}>
      {(element) => `${element.name}`}
    </ItemList>
  );
};

const StarshipList = (props) => {
  return (
    <ItemList
      onItemSelect={props.onStarshipSelect}
      requestName={"getAllStarships"}
    >
      {(element) => `${element.name}`}
    </ItemList>
  );
};

const PlanetList = (props) => {
  return (
    <ItemList onItemSelect={props.onPlanetSelect} requestName={"getAllPlanets"}>
      {(element) => `${element.name}`}
    </ItemList>
  );
};

export { PeopleList, StarshipList, PlanetList };
