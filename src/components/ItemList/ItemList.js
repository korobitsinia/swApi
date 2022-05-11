import React, { useEffect } from "react";
import PropTypes from "prop-types";

import IndicatorsRender from "../IndicatorsRender";

import useAsyncSwapi from "../../hooks/useAsyncSwapi";

import style from "./ItemList.module.css";

function ItemList(props) {
  const { onItemSelect, requestName } = props;
  const [itemList, loading, error, download] = useAsyncSwapi(requestName, true);
  useEffect(() => {
    download();
  }, []);

  return (
    <ul className={style.itemList}>
      <IndicatorsRender loading={loading} error={error} />
      {!loading &&
        !error &&
        itemList.map((item) => {
          const { id } = item;
          const label = props.children(item);
          return (
            <li key={id} onClick={() => onItemSelect(id)}>
              {label}
            </li>
          );
        })}
    </ul>
  );
}

ItemList.propTypes = {
  onItemSelect: PropTypes.func,
  requestName: PropTypes.string,
};

export default ItemList;
