import { createSlice } from "@reduxjs/toolkit";
const poductSlice = createSlice({
  name: "Myntra",
  initialState: {
     product:{},
  },
  reducers: {
    showProduct(state, action) {
     state.product={...action.payload};
     
    }
  
  }
});


export const productAction = poductSlice.actions;
export default poductSlice;
