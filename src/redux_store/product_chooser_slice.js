// @flow

import fields from "../../data/product_chooser_fields.json";
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
    visibleSection: { order: defaultSectionOrder, idx: 0, option_idx: 0 },
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
      state.visibleSection = {
        order: defaultSectionOrder,
        idx: 0,
        option_idx: 0,
      };
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
        // Increment the section we're observing
        state.visibleSection.idx += 1;
      }
      // Display the first option in that section,
      // if we're showing one at a time
      state.visibleSection.option_idx = 0;
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
        // Decrement the section we're observing
        state.visibleSection.idx -= 1;
      }

      const chosen_index = chosenIndex(state);

      // Display the currently selected option,
      // if we're showing one at a time
      if (chosen_index === -1) {
        state.visibleSection.option_idx = 0;
      } else {
        state.visibleSection.option_idx = chosen_index;
      }
    },
    nextOption: (state) => {
      const cf = currentField(state);
      let n = 1;

      // If we're already at the end, just give up immediately
      // If we're not at the end and the next option is available,
      // move to the next option.
      // If we're not at the end and the next option is not available,
      // increment the skip count and see if the one after that is available
      while (state.visibleSection.option_idx + n !== choiceWidth(state)) {
        if (
          !state.unavailable[cf.choice].includes(
            cf.options[state.visibleSection.option_idx + n].value
          )
        ) {
          state.visibleSection.option_idx += n;
          break;
        }
        n += 1;
      }
    },
    previousOption: (state) => {
      const cf = currentField(state);
      let n = 1;

      // If we're already at the beginning, just give up immediately
      // If we're not at the beginning and the previous option is available,
      // move to the previous option.
      // If we're not at the beginning and the previous option is not available,
      // increment the skip count and see if the one before that is available
      while (state.visibleSection.option_idx - n !== -1) {
        if (
          !state.unavailable[cf.choice].includes(
            cf.options[state.visibleSection.option_idx - n].value
          )
        ) {
          state.visibleSection.option_idx -= n;
          break;
        }
        n += 1;
      }
    },
  },
});

const choiceWidth = (state) => {
  const field = currentField(state);
  if (field) {
    return field.options.length;
  }
  // This should never happen, but this is JS so who knows?
  return 0;
};

const chosenIndex = (state) => {
  let chosen_index = -1;
  const field = currentField(state);
  if (field) {
    chosen_index = field.options.findIndex((o) => {
      return (
        o.value ===
        state.selections[state.visibleSection.order[state.visibleSection.idx]]
      );
    });
  }
  return chosen_index;
};

const currentField = (state) => {
  return fields.find((f) => {
    return f.choice === state.visibleSection.order[state.visibleSection.idx];
  });
};

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
