import React, { useState } from "react";

import Row from "../../components/Row";

import { StarshipDetails, StarshipList } from "../../components/SwComponents";

const StarshipPage = () => {
  const [starshipId, setStarshipId] = useState(9);

  const onStarshipSelect = (id) => {
    setStarshipId(id);
  };

  const list = (
    <StarshipList onStarshipSelect={onStarshipSelect} itemId={starshipId} />
  );
  const details = (
    <StarshipDetails onStarshipSelect={onStarshipSelect} itemId={starshipId} />
  );

  return <Row leftItem={list} rightItem={details} />;
};

export default StarshipPage;
