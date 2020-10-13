// @flow

import React, {useRef, useEffect} from "react";
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
  const visibleOptions = field.options.filter((option) => {
    return !unavailableOptions[field.choice].includes(option.value);
  });
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current && (scrollRef.current.scrollLeft = 0)
  });

  return (
    <div>
      <h3 className="section-title">{field.title}</h3>
      <div className="container-mobile-scroll" ref={scrollRef}>
        {
          visibleOptions.map((option) => {
            return (
              <MobileProductOption
                choice={field.choice}
                option={option}
                key={option.value}
              ></MobileProductOption>
            );
          })
        }
      </div>
      <div className="section-footer">
        <PreviousButton choice={field.choice}></PreviousButton>
        <ResetButton></ResetButton>
      </div>
    </div>
  );
};
