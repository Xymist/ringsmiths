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
    <div>
      <h3 className="spec-title">Your perfect ring</h3>
      <img className="progress-bar" src={progressUrl(currentIdx)}></img>
      <div className="option-set">
        <div className="spec-image-final product-option">
          <img
            className="product-image"
            src={imageUrl([style, metal, width])}
          ></img>
        </div>
        <div className="spec-text-container product-option">
          <p className="spec-text20">
            Your chosen ring is a{" "}
            <b>
              {carat ? titleCase(carat) + " " : ""}
              {titleCase(metal)} {titleCase(style)}
            </b>{" "}
            wedding ring with a finger width of <b>{titleCase(width)}</b>.
          </p>
          <p className="spec-text15">
            We make your rings using recycled metals and only use recycled and
            recyclable packaging materials. When you purchase a ring from
            Ringsmiths, we go the extra mile to create something just for you.
          </p>
          <p className="spec-text15">
            To find out more about your perfect ring such as price,
            customisation options and to order a free eco-friendly sample of
            your ring, click on the button below.
          </p>
          <FinaliseButton></FinaliseButton>
        </div>
      </div>
      <div className="section-footer">
        <PreviousButton choice={null}></PreviousButton>
        <ResetButton></ResetButton>
      </div>
    </div>
  );
};
