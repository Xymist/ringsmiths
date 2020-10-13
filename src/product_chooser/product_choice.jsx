// @flow

import React from "react";
import ReactDOM from "react-dom";
import { ProductOption } from "./product_option";
import { PreviousButton } from "./previous_button";
import { ResetButton } from "./reset_button";
import { NextButton } from "./next_button";
import { useSelector } from "react-redux";
import { progressUrl } from "../utils/image_url";

export const ProductChoice = (props: any) => {
  const field = props.field;
  const optionCount = useSelector((state) => {
    return state.productChooser.visibleOptions[field.choice];
  });
  const currentIdx = useSelector((state) => {
    return state.productChooser.visibleSection.idx + 1;
  });
  const unavailableOptions = useSelector((state) => {
    return state.productChooser.unavailable;
  });

  return (
    <div>
      <h3 className="section-title">{field.title}</h3>
      <img className="progress-bar" src={progressUrl(currentIdx)}></img>
      <div className="option-set">
        {field.options
          .filter((option) => {
            return !unavailableOptions[field.choice].includes(option.value);
          })
          .map((option) => {
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
      <div className="section-footer">
        <PreviousButton choice={field.choice}></PreviousButton>
        <ResetButton></ResetButton>
        <NextButton choice={field.choice}></NextButton>
      </div>
    </div>
  );
};
