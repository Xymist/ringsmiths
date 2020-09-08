import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

export const ResetButton = () => {
  const dispatch = useDispatch();
  const initialSection = useSelector((state) => {
    return state.productChooser.visibleSection.idx === 0;
  });
  return (
    <div className="section-button">
      <button
        className={"reset-button" + (initialSection ? " invisible-option" : "")}
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "productChooser/resetSelections",
          });
        }}
      >
        Start Again
      </button>
    </div>
  );
};
