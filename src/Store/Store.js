import { configureStore } from "@reduxjs/toolkit";
import poductSlice from "./poductSlice";

const store = configureStore({
  reducer: {
    product: poductSlice.reducer,
  },
});

export default store;


