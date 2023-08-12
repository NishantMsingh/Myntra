import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartItems: [] },
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      console.log(action.payload); 
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
