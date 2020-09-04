//@flow

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import fields from "../../data/fields.json";
import store from "../store.js";
import { ProductResult } from "./product_result";
import { ProductChoice } from "./product_choice";
import "../../styles/product_chooser.css";

const ProductChooser = (props) => {
  return (
    <div className="product-chooser-root">
      {props.fields.map((field) => {
        return <ProductChoice field={field} key={field.choice}></ProductChoice>;
      })}
      <ProductResult></ProductResult>
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
