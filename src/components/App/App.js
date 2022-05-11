import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import People from "../../pages/People";
import Starships from "../../pages/Starships";
import Planets from "../../pages/Planets";
import style from "./App.module.css";

import SwapiService from "../../services/service";
import { StarshipDetails } from "../SwComponents";

export const SwapiContext = React.createContext();

const RouteElement = ({ component: RouteComponent, ...passProps }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <RouteComponent {...passProps} location={location} navigate={navigate} />
  );
};
const App = () => {
  const swapi = new SwapiService();

  return (
    <BrowserRouter>
      <div className={style.app}>
        <div className={style.container}>
          <Header />
          <SwapiContext.Provider value={swapi}>
            <RandomPlanet />
            <Routes>
              <Route
                path="/"
                exact
                element={<h1>Welcome to STAR WARS database</h1>}
              />
              <Route path="/people" element={<People />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/starships" exact element={<Starships />} />
              <Route
                path="/starships/:id"
                element={
                  <RouteElement component={StarshipDetails} itemId={9} />
                }
              />
              {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
          </SwapiContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
