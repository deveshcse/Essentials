import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subtotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        const item = {
          ...action.payload,
          itemSubtotal: Math.ceil(
            action.payload.orderQuantity * action.payload.price
          ),
        };
        state.cartItems.push(item);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { value, id } = action.payload;

      state.cartItems = state.cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              orderQuantity: value,
              itemSubtotal: Math.ceil(value * item.price),
            }
          : item
      );
    },
    calculateSubtotal: (state) => {
      state.subtotal = state.cartItems.reduce((acc, item) => {
        return acc + item.itemSubtotal;
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, calculateSubtotal } =
  cartSlice.actions;
export default cartSlice.reducer;
