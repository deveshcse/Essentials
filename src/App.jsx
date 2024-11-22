import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUpLogin from "./Components/SignUpLogin";
import ProductContainer from "./Components/ProductContainer";

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
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
