import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUpLogin from "./Components/SignUpLogin";
import ProductContainer from "./Components/ProductContainer";
import AllProductView from "./Components/AllProductView";
import WishlistContainer from "./Components/WishlistContainer";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const NotFoundPage = () => {
  return <h1>Page not found</h1>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signUpLogin", element: <SignUpLogin /> },
      { path: "/product/:id", element: <ProductContainer /> },
      { path: "/allProduct/:category", element: <AllProductView /> },
      { path: "/wishlist", element: <WishlistContainer /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
