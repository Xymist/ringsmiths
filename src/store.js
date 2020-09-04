// @flow

import { configureStore } from "@reduxjs/toolkit";
import { productChooserSlice } from "./product_chooser/product_chooser_slice.js";

export default configureStore({
  reducer: {
    productChooser: productChooserSlice.reducer,
  },
});
