import React, { useState } from "react";

import Row from "../../components/Row";

import { PlanetDetails, PlanetList } from "../../components/SwComponents";

const PlanetPage = () => {
  const [planetId, setPlanetId] = useState(4);
  const onPlanetSelect = (id) => {
    setPlanetId(id);
  };

  const list = <PlanetList onPlanetSelect={onPlanetSelect} itemId={planetId} />;
  const details = (
    <PlanetDetails onPlanetSelect={onPlanetSelect} itemId={planetId} />
  );

  return <Row leftItem={list} rightItem={details} />;
};

export default PlanetPage;
