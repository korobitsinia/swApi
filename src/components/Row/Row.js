import React from "react";
import style from "./Row.module.css";
//React element props
const Row = ({ leftItem, rightItem }) => {
  return (
    <div className={style.row}>
      {leftItem}
      {rightItem}
    </div>
  );
};

export default Row;
