// @flow

import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { imageUrl } from "../../utils/image_url.js";
import { useDrag } from "react-use-gesture";
import titleCase from "../../utils/title_case";

export const MobileProductOption = (props: any) => {
  const boundary = 100;
  const overspill = boundary + 50;
  const dispatch = useDispatch();
  const selectedOptions = useSelector((state) => {
    return state.productChooser.selections;
  });

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

      if (!canceled) {
        if (tap) {
          cancel();
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
          cancel();
          dispatch({
            type: "productChooser/previousOption",
          });
        } else if (mx < -boundary) {
          cancel();
          dispatch({
            type: "productChooser/nextOption",
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
    <>
      <img
        src={imageUrl(["previous-rs"], null, ".png")}
        onClick={() => {
          dispatch({
            type: "productChooser/previousOption",
          });
        }}
      ></img>
      <animated.div {...bind()} style={{ x }} className="mobile-card">
        <img
          src={imageUrl(props, selectedOptions)}
          className="product-image"
        ></img>
        <h3 className="mobile-h3">{titleCase(props.option.value)}</h3>
      </animated.div>
      <img
        src={imageUrl(["next-rs"], null, ".png")}
        onClick={() => {
          dispatch({
            type: "productChooser/nextOption",
          });
        }}
      ></img>
    </>
  );
};
