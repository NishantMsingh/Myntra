
import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "Myntra",
  initialState: {
     product:[],
  },
  reducers: {
    addToCart(state, action) {
     state.product.push(action.payload);
     console.log(state.product);
     console.log(action.payload);
    }
  }
});


export const productAction = productSlice.actions;
export default productSlice;