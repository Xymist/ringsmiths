// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { imageUrl } from "../../utils/image_url.js";
import titleCase from "../../utils/title_case";

export const MobileProductOption = (props: any) => {
  const dispatch = useDispatch();
  const selectedOptions = useSelector((state) => {
    return state.productChooser.selections;
  });

  return (
    <div
      className="product-option"
      onClick={() => {
        dispatch({
          type: "productChooser/selectOption",
          payload: {
            field: props.choice,
            value: props.option.value,
          },
        });
        dispatch({
          type: "productChooser/nextChoice",
        });
      }}
    >
      <img
        src={imageUrl(props, selectedOptions)}
        className="product-image"
      ></img>
      <h3>{titleCase(props.option.value)}</h3>
    </div>
  );
};
