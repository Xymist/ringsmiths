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
  const unavailableOptions = useSelector((state) => {
    return state.productChooser.unavailable;
  });
  const dispatch = useDispatch();
  const selected = props.option.value === selectedOptions[props.choice];
  const unavailable = unavailableOptions[props.choice].includes(
    props.option.value
  );
  const imageData = [
    props.choice === "style"
      ? props.option.value
      : selectedOptions.style || "court",
    props.choice === "metal"
      ? props.option.value
      : selectedOptions.metal || "yellow-gold",
    props.choice === "width"
      ? props.option.value
      : selectedOptions.width || "4mm",
  ].join("-");

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
      <img src={imageUrl(imageData)} className="product-image"></img>
    </div>
  );
};
