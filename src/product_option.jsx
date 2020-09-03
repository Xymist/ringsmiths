// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import titleCase from "./title_case.js";

export const ProductOption = (props: any) => {
  const id = props.choice + "-" + props.option.value;
  const selectedOptions = useSelector((state) => {
    return state.productChooser.selections;
  });
  const unavailableOptions = useSelector((state) => {
    return state.productChooser.unavailable;
  });
  const dispatch = useDispatch();
  const selected = props.option.value === selectedOptions[props.choice];
  const unavailable = unavailableOptions[props.choice].includes(
    props.option.value
  );

  return (
    <div
      id={id}
      className={
        (selected ? "selected-option " : "") +
        (unavailable ? "invisible-option " : "") +
        "product-option"
      }
      style={{
        width: 100 / props.width + "%",
      }}
      onClick={() => {
        dispatch({
          type: "productChooser/selectOption",
          payload: {
            field: props.choice,
            value: selected ? null : props.option.value,
          },
        });
      }}
    >
      <h3>{titleCase(props.option.value)}</h3>
      <img src="noop" style={{ width: "80%", margin: "auto" }}></img>
    </div>
  );
};
