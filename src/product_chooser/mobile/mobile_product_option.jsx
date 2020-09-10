// @flow

import React from "react";
import ReactDOM from "react-dom";
import { animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { imageUrl } from "../../utils/image_url.js";
import { useDrag } from "react-use-gesture";
import titleCase from "../../utils/title_case";

export const MobileProductOption = (props: any) => {
  const dispatch = useDispatch();
  const selectedOptions = useSelector((state) => {
    return state.productChooser.selections;
  });
  const imageData = [
    props.choice === "style"
      ? props.option.value
      : selectedOptions.style || "court",
    props.choice === "metal"
      ? props.option.value
      : selectedOptions.metal || "yellow-gold",
    props.choice === "width"
      ? props.option.value
      : selectedOptions.width || "4mm",
  ].join("-");

  // If we detect a swipe to the left, display the
  // next option in the list (i.e. the one to the right)
  // If we detect a swipe to the right, display
  // the previous option in the list.
  // If the swipeX value is zero, they went up or down,
  // so we do nothing.
  const bind = useDrag(
    ({ swipe: [swipeX], tap }) => {
      if (tap) {
        dispatch({
          type: "productChooser/selectOption",
          payload: {
            field: props.choice,
            value: props.option.value,
          },
        });
        dispatch({
          type: "productChooser/nextChoice",
        });
      }
      switch (swipeX) {
        case -1:
          dispatch({
            type: "productChooser/nextOption",
          });
          break;
        case 1:
          dispatch({
            type: "productChooser/previousOption",
          });
          break;
        default:
          break;
      }
    },
    { filterTaps: true }
  );

  return (
    <animated.div {...bind()}>
      <h3>{titleCase(props.option.value)}</h3>
      <img src={imageUrl(imageData)} className="product-image"></img>
    </animated.div>
  );
};
