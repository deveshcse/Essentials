import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./WishlistSlice";
import cartReducer from "./CartSlice";
import authReducer from './authSlice';
const appStore = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default appStore;
