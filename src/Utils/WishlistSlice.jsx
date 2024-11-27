import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    removeFromWishlist: (state, action) => {
        state.wishlistItems = state.wishlistItems.filter(
            (item) => item.id !== action.payload.id
          );
    },
    toggleWishlistItem: (state, action) => {
      const exist = state.wishlistItems.some(
        (item) => item.id === action.payload.id
      );
      if (exist) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishlistItems.push(action.payload);
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist, toggleWishlistItem } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;
