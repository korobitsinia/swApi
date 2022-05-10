import React, { useEffect } from "react";
import IndicatorsRender from "../IndicatorsRender";

import useAsyncSwapi from "../../hooks/useAsyncSwapi";

import style from "./RandomPlanet.module.css";

const RandomPlanet = () => {
  let [planet, loading, error, download] = useAsyncSwapi("getPlanet", false);
  useEffect(() => {
    download();
    let interval = setInterval(download, 15000);
    return () => clearInterval(interval);
  }, []);

  const hasData = !loading && !error && planet;
  const content = hasData ? <PlanetView planet={planet} /> : null;
  return (
    <div className={style.randomPlanet}>
      <IndicatorsRender loading={loading} error={error} />
      {content}
    </div>
  );
};

export default React.memo(RandomPlanet);

const PlanetView = ({ planet }) => (
  <>
    <img
      src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
      alt={"random"}
      className={style.image}
    />
    <div className={style.info}>
      <h2 className={style.title}>{planet.name}</h2>
      <h3 className={style.row}>population: {planet.population}</h3>
      <h3 className={style.row}>rotation period: {planet.rotationPeriod}</h3>
      <h3 className={style.row}>diameter: {planet.diameter}</h3>
    </div>
  </>
);
