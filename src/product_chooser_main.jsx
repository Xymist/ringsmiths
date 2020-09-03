//@flow

import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import fields from "../data/fields.json";
import titleCase from "./title_case.js";
import store from "./store.js";
import { ProductOption } from "./product_option.jsx";
import { productUrl } from "./product_chooser_slice.js";
import "../styles/product_chooser.css";

const NextButton = (props) => {
  const dispatch = useDispatch();
  const selectionMade = useSelector((state) => {
    return state.productChooser.selections[props.choice];
  });

  return (
    <div
      className={"section-button" + (selectionMade ? "" : " invisible-option")}
    >
      <button
        className="next-button"
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "productChooser/nextChoice",
          });
        }}
      >
        Next
      </button>
    </div>
  );
};

const ResetButton = () => {
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

const ProductChoice = (props) => {
  const field = props.field;
  const optionCount = useSelector((state) => {
    return state.productChooser.visibleOptions[field.choice];
  });
  const visibleSection = useSelector((state) => {
    return state.productChooser.visibleSection[0];
  });

  return (
    <div className={visibleSection !== field.choice ? "invisible-option" : ""}>
      <div style={{ display: "flex" }}>
        {field.options.map((option) => {
          return (
            <ProductOption
              choice={field.choice}
              option={option}
              width={optionCount}
              key={option.value}
            ></ProductOption>
          );
        })}
      </div>
      <div style={{ display: "flex", marginTop: "15px" }}>
        <ResetButton></ResetButton>
        <NextButton choice={field.choice}></NextButton>
      </div>
    </div>
  );
};

const ProductChooser = (props) => {
  const selectedUrl = useSelector(productUrl);
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1>Let's get started!</h1>
      {props.fields.map((field) => {
        return <ProductChoice field={field} key={field.choice}></ProductChoice>;
      })}
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
