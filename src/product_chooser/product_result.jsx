// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import titleCase from "../utils/title_case";
import { PreviousButton } from "./previous_button";
import { FinaliseButton } from "./finalise_button";
import { ResetButton } from "./reset_button";

export const ProductResult = (props: any) => {
  const visibleSection = useSelector((state) => {
    return state.productChooser.visibleSection.order[
      state.productChooser.visibleSection.idx
    ];
  });
  const [carat, metal, style, width] = useSelector((state) => {
    return [
      state.productChooser.selections.carat,
      state.productChooser.selections.metal || "yellow-gold",
      state.productChooser.selections.style || "court",
      state.productChooser.selections.width || "4mm",
    ];
  });

  const specText = `Your chosen ring is a ${
    carat ? carat + " " : ""
  }${titleCase(metal)} ${titleCase(
    style
  )} wedding ring with a finger width of ${titleCase(width)}.`;

  return (
    <div className={visibleSection === "result" ? "" : " invisible-option"}>
      <div className="option-set">
        <div className="spec-image product-option">
          <img src={"noop"}></img>
        </div>
        <div className="spec-text-container product-option">
          <p className="spec-text">{specText}</p>
          <p className="spec-text">
            We make your rings using recycled metals and only use recycled and
            recyclable packaging materials. When you purchase a ring from
            Ringsmiths, we go the extra mile to create something just for you.
            To find out more about your perfect ring such as price,
            customisation options and to order a free eco-friendly sample of
            your ring, click on the button below.
          </p>
        </div>
      </div>
      <div className="section-footer">
        <PreviousButton choice={null}></PreviousButton>
        <ResetButton></ResetButton>
        <FinaliseButton></FinaliseButton>
      </div>
    </div>
  );
};
