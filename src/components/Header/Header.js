import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <NavLink to="/">Star DB</NavLink>
      </div>
      <ul className={style.nav}>
        <li className={style.link}>
          <NavLink to="/people" >People</NavLink>
        </li>
        <li className={style.link}>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li className={style.link}>
          <NavLink to="/starships">Starships</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Header);
