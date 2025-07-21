import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import FilteredProductsProvider from "./Contexts/FilteredProductsProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <FilteredProductsProvider>
        <App />
      </FilteredProductsProvider>
    </HashRouter>
  </StrictMode>
);
