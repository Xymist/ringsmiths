//@flow

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import fields from "../../data/product_chooser_fields.json";
import store from "../redux_store/store.js";
import { ProductResult } from "./product_result";
import { ProductChoice } from "./product_choice";
import "../../styles/product_chooser.scss";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { MobileProductChoice } from "./mobile/mobile_product_choice";
import { MobileProductResult } from "./mobile/mobile_product_result";

const ProductChooser = (props) => {
  const stupidTinyScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const visibleSection = useSelector((state) => {
    return state.productChooser.visibleSection.order[
      state.productChooser.visibleSection.idx
    ];
  });
  const visibleField = useSelector((state) => {
    return fields.find((f) => {
      return f.choice === visibleSection;
    });
  });
  const resultPage = visibleSection === "result";

  return (
    <div className="product-chooser-root">
      {stupidTinyScreen ? (
        resultPage ? (
          <MobileProductResult></MobileProductResult>
        ) : (
          <MobileProductChoice field={visibleField}></MobileProductChoice>
        )
      ) : resultPage ? (
        <ProductResult></ProductResult>
      ) : (
        <ProductChoice field={visibleField}></ProductChoice>
      )}
    </div>
  );
};

const mountNode = document.getElementById("product-chooser-body");

if (mountNode) {
  ReactDOM.render(
    <Provider store={store}>
      <ProductChooser fields={fields} />
    </Provider>,
    mountNode
  );
}
