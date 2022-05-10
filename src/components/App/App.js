import React from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";

import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    </div>
  );
};

export default App;
