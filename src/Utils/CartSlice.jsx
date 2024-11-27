import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const item = action.payload;
        state.cartItems.push(item);
    },
    removeFromCart: (state, action) => {
        state.cartItems= state.cartItems.filter((item) => item.id !== action.payload);
    },
    updateQuantityInCart: (state, action) => {},
  },
});


export const {addToCart, removeFromCart, updateQuantityInCart} = cartSlice.actions;
export default cartSlice.reducer;