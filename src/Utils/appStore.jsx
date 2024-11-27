import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import wishlistReducer from "./WishlistSlice";
import cartReducer from "./CartSlice";
const appStore = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default appStore;
