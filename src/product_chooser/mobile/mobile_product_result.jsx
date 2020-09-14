// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { imageUrl } from "../../utils/image_url";
import titleCase from "../../utils/title_case";
import { PreviousButton } from "../previous_button";
import { ResetButton } from "../reset_button";
import { FinaliseButton } from "../finalise_button";

export const MobileProductResult = (props: any) => {
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
