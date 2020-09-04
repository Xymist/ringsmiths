// @flow

import fields from "../../data/fields.json";
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

const defaultSectionOrder = ["metal", "carat", "style", "width", "result"];

export const productChooserSlice = createSlice({
  name: "productChooser",
  initialState: {
    selections: defaultSelections,
    visibleOptions: defaultVisibleOptions,
    visibleSection: { order: defaultSectionOrder, idx: 0 },
    unavailable: defaultUnavailable,
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
      state.visibleSection = { order: defaultSectionOrder, idx: 0 };
    },
    nextChoice: (state) => {
      if (state.visibleSection.idx === state.visibleSection.order.length - 1) {
        return;
      }
      state.visibleSection.idx += 1;
      while (
        state.visibleOptions[
          state.visibleSection.order[state.visibleSection.idx]
        ] === 0
      ) {
        state.visibleSection.idx += 1;
      }
    },
    previousChoice: (state) => {
      if (state.visibleSection.idx === 0) {
        return;
      }
      state.visibleSection.idx -= 1;
      while (
        state.visibleOptions[
          state.visibleSection.order[state.visibleSection.idx]
        ] === 0
      ) {
        state.visibleSection.idx -= 1;
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
