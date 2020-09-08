// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import titleCase from "../utils/title_case";
import { PreviousButton } from "./previous_button";
import { FinaliseButton } from "./finalise_button";
import { ResetButton } from "./reset_button";
import { imageUrl } from "../utils/image_url";
import { progressUrl } from "../utils/image_url";

export const ProductResult = (props: any) => {
  const visibleSection = useSelector((state) => {
    return state.productChooser.visibleSection.order[
      state.productChooser.visibleSection.idx
    ];
  });
  const currentIdx = useSelector((state) => {
    return state.productChooser.visibleSection.idx + 1;
  });
  const [carat, metal, style, width] = useSelector((state) => {
    return [
      state.productChooser.selections.carat,
      state.productChooser.selections.metal || "yellow-gold",
      state.productChooser.selections.style || "court",
      state.productChooser.selections.width || "4mm",
    ];
  });

  return (
    <div className={visibleSection === "result" ? "" : " invisible-option"}>
      <h3 className="spec-title">Your perfect ring</h3>
      <img className="progress-bar" src={progressUrl(currentIdx)}></img>
      <div className="option-set">
        <div className="spec-image product-option">
          <img
            className="product-image"
            src={imageUrl([style, metal, width].join("-"))}
          ></img>
        </div>
        <div className="spec-text-container product-option">
          <h3>Your Perfect Ring</h3>
          <p className="spec-text">
            Your chosen ring is a <b>{carat ? titleCase(carat) + " " : ""}
            {titleCase(metal)} {titleCase(style)}</b> wedding ring with a finger
            width of <b>{titleCase(width)}</b>.
          </p>
          <p className="spec-text">
            We make your rings using recycled metals and only use recycled and
            recyclable packaging materials. When you purchase a ring from
            Ringsmiths, we go the extra mile to create something just for you.
            <p>To find out more about your perfect ring such as price,
            customisation options and to order a free eco-friendly sample of
            your ring, click on the button below.</p>
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
