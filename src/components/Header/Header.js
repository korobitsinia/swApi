import React from "react";

import style from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.title}>STAR DB</div>
      <ul className={style.nav}>
        <li className={style.link}>People</li>
        <li className={style.link}>Planets</li>
        <li className={style.link}>Starships</li>
      </ul>
    </div>
  );
};

export default React.memo(Header);
