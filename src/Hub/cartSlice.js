import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState:[],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
      console.log(action.payload); 
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
