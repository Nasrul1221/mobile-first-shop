import React from "react";
import "./index.css";
import { useRoutes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import Home from "./pages/Home";

export default function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/cart", element: <p>Cart</p> },
        { path: "/profile", element: <p>Profile</p> },
      ],
    },
  ]);
  return router;
}
