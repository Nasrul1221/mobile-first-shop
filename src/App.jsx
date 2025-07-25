import React from "react";
import "./index.css";
import { Outlet, useRoutes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import Products from "./pages/Products";

export default function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/cart", element: <p>Cart</p> },
        { path: "/profile", element: <p>Profile</p> },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:productID",
          element: <ProductDetail />,
        },
      ],
    },
  ]);
  return router;
}
