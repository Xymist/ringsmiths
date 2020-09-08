// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

export const PreviousButton = (props: any) => {
  const dispatch = useDispatch();
  const selectionMade = useSelector((state) => {
    return state.productChooser.selections[props.choice];
  });
  const initialSection = useSelector((state) => {
    return state.productChooser.visibleSection.idx === 0;
  });

  return (
    <div className="section-button">
      <button
        className={
          "previous-button" + (initialSection ? " invisible-option" : "")
        }
        onClick={(e) => {
          e.preventDefault();
          if (props.choice) {
            dispatch({
              type: "productChooser/selectOption",
              payload: {
                field: props.choice,
                value: null,
              },
            });
          }
          dispatch({
            type: "productChooser/previousChoice",
          });
        }}
      >
        Back
      </button>
    </div>
  );
};
