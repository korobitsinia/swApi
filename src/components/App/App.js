import React from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import People from "../../pages/People";
import style from "./App.module.css";

import SwapiService from "../../services/service";

export const SwapiContext = React.createContext();

const App = () => {
  const swapi = new SwapiService();
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Header />
        <SwapiContext.Provider value={swapi}>
          <RandomPlanet />
          <People />
        </SwapiContext.Provider>
      </div>
    </div>
  );
};

export default App;
