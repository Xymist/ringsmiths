// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { productUrl } from "../redux_store/product_chooser_slice";

export const FinaliseButton = () => {
  const selectedUrl = useSelector(productUrl);
  return (
    <div className="section-button">
      <button className="next-button" href={selectedUrl}>
        Buy my perfect ring
      </button>
    </div>
  );
};
