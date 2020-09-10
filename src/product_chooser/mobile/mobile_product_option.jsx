// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { imageUrl } from "../../utils/image_url.js";
import { useDrag } from "react-use-gesture";
import titleCase from "../../utils/title_case";
import { CANCELLED } from "dns";

export const MobileProductOption = (props: any) => {
  const boundary = 100;
  const overspill = boundary + 50;
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

  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  // If we detect a swipe to the left, display the
  // next option in the list (i.e. the one to the right)
  // If we detect a swipe to the right, display
  // the previous option in the list.
  // If the swipeX value is zero, they went up or down,
  // so we do nothing.
  const bind = useDrag(
    ({ down, movement: [mx], tap, cancel, canceled }) => {
      set({ x: down ? mx : 0 });
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
      } else if (mx > boundary) {
        if (!canceled) {
          cancel();
          dispatch({
            type: "productChooser/nextOption",
          });
        }
      } else if (mx < -boundary) {
        if (!canceled) {
          cancel();
          dispatch({
            type: "productChooser/previousOption",
          });
        }
      }
    },
    {
      filterTaps: true,
      axis: "x",
      bounds: {
        left: -overspill,
        right: overspill,
        top: -overspill,
        bottom: overspill,
      },
      rubberband: true,
    }
  );

  return (
    <animated.div {...bind()} style={{ x }}>
      <img src={imageUrl(imageData)} className="product-image"></img>
      <h3>{titleCase(props.option.value)}</h3>
    </animated.div>
  );
};
