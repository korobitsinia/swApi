import React, { useState } from "react";

import Row from "../Row";

import {
  PeopleList,
  PersonDetails,
  PlanetDetails,
  PlanetList,
  StarshipDetails,
  StarshipList,
} from "../SwComponents";

const PeoplePage = () => {
  const [personId, setPersonId] = useState(4);
  const onPersonSelect = (id) => {
    setPersonId(id);
  };

  const list = <PeopleList onPersonSelect={onPersonSelect} itemId={personId} />;
  const details = (
    <PersonDetails onPersonSelect={onPersonSelect} itemId={personId} />
  );

  return <Row leftItem={list} rightItem={details} />;
};

export default PeoplePage;
