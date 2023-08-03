<<<<<<< HEAD
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
=======
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
>>>>>>> 196c434fd0ef497977ed85c89032fe7cfc4a07f1
