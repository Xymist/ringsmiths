// @flow

import React from "react";
import ReactDOM from "react-dom";
import { MobileProductOption } from "./mobile_product_option";
import { useSelector } from "react-redux";
import { PreviousButton } from "../previous_button";
import { ResetButton } from "../reset_button";

export const MobileProductChoice = (props: any) => {
  const field = props.field;
  const unavailableOptions = useSelector((state) => {
    return state.productChooser.unavailable;
  });

  return (
    <div>
      <h3 className="section-title">{field.title}</h3>
      <div className="container-mobile-scroll">
        {field.options
          .filter((option) => {
            return !unavailableOptions[field.choice].includes(option.value);
          })
          .map((option) => {
            return (
              <MobileProductOption
                choice={field.choice}
                option={option}
                key={option.value}
              ></MobileProductOption>
            );
          })}
      </div>
      <div className="section-footer">
        <PreviousButton choice={field.choice}></PreviousButton>
        <ResetButton></ResetButton>
      </div>
    </div>
  );
};
