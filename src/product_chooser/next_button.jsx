// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

export const NextButton = (props: any) => {
  const dispatch = useDispatch();
  const selectionMade = useSelector((state) => {
    return state.productChooser.selections[props.choice];
  });

  return (
    <div
      className={"section-button" + (selectionMade ? "" : " invisible-option")}
    >
      <button
        className="next-button"
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "productChooser/nextChoice",
          });
        }}
      >
        Next
      </button>
    </div>
  );
};
