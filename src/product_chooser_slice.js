// @flow

import fields from "../data/fields.json";
import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const defaultSelections = {
  carat: null,
  width: null,
  metal: null,
  style: null,
};

const defaultVisibleOptions = {
  metal: 5,
  carat: 2,
  style: 4,
  width: 7,
};

const defaultUnavailable = {
  carat: [],
  width: [],
  metal: [],
  style: [],
};

const defaultUrl = "#";

const defaultSectionOrder = ["metal", "carat", "style", "width"];

export const productChooserSlice = createSlice({
  name: "productChooser",
  initialState: {
    selections: defaultSelections,
    visibleOptions: defaultVisibleOptions,
    visibleSection: defaultSectionOrder,
    unavailable: defaultUnavailable,
    url: defaultUrl,
  },
  reducers: {
    selectOption: (state, action) => {
      state.selections[action.payload.field] = action.payload.value;
      fields.forEach((field) => {
        state.unavailable[field.choice] = [];
        field.options.forEach((opt) => {
          const exclusions = opt.excl_attrs;
          exclusions.forEach((excl) => {
            if (excl.exclusions.includes(state.selections[excl.attr])) {
              state.unavailable[field.choice].push(opt.value);
            }
          });
        });
        state.unavailable[field.choice] = [
          ...new Set(state.unavailable[field.choice]),
        ];
        state.visibleOptions[field.choice] =
          field.options.length - state.unavailable[field.choice].length;
      });
    },
    resetSelections: (state) => {
      state.selections = defaultSelections;
      state.unavailable = defaultUnavailable;
      state.visibleOptions = defaultVisibleOptions;
      state.visibleSection = defaultSectionOrder;
      state.url = defaultUrl;
    },
    nextChoice: (state) => {
      state.visibleSection.shift();
      while (state.visibleOptions[state.visibleSection[0]] === 0) {
        state.visibleSection.shift();
      }
    },
  },
});

// Fetch the pieces we want from the selections object; anything we don't want
// will be null or undefined, and will be removed by the filter
export const productUrl = (state: any) => {
  return (
    "/product/" +
    [
      state.productChooser.selections.carat,
      state.productChooser.selections.width,
      state.productChooser.selections.metal,
      state.productChooser.selections.style,
      "wedding-ring",
    ]
      .filter(Boolean)
      .join("-")
  );
};
