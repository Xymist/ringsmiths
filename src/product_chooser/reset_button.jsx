import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

export const ResetButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="section-button">
      <button
        className="reset-button"
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "productChooser/resetSelections",
          });
        }}
      >
        Reset
      </button>
    </div>
  );
};
