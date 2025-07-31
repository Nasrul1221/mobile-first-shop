import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import FilteredProductsProvider from "./Contexts/FilteredProductsProvider";
import CartProvider from "./Contexts/CartProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <CartProvider>
        <FilteredProductsProvider>
          <App />
        </FilteredProductsProvider>
      </CartProvider>
    </HashRouter>
  </StrictMode>
);
