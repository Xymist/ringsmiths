// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import titleCase from "../utils/title_case.js";
import { imageUrl } from "../utils/image_url.js";

export const ProductOption = (props: any) => {
  const id = props.choice + "-" + props.option.value;
  const selectedOptions = useSelector((state) => {
    return state.productChooser.selections;
  });
  const dispatch = useDispatch();
  const selected = props.option.value === selectedOptions[props.choice];

  return (
    <div
      id={id}
      className={(selected ? "selected-option " : "") + "product-option"}
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
      <img
        src={imageUrl(props, selectedOptions)}
        className="product-image"
      ></img>
    </div>
  );
};
