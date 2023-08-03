<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import poductSlice from "./poductSlice";

const store = configureStore({
  reducer: {
    product: poductSlice.reducer,
  },
});

export default store;


=======
import { configureStore } from "@reduxjs/toolkit";
import poductSlice from "./poductSlice";

const store = configureStore({
  reducer: {
    product: poductSlice.reducer,
  },
});

export default store;


>>>>>>> 196c434fd0ef497977ed85c89032fe7cfc4a07f1
