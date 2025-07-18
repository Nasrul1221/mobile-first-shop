import React from "react";
import TitlePage from "./Home/TitlePage";
import Break from "./Home/Break";
import SellingArrivals from "./Home/SellingArrivals";
import BrowseByStyle from "./Home/BrowseByStyle";
import Reports from "./Home/Reports";

export default function Home() {
  return (
    <div>
      <TitlePage />
      <Break />
      <SellingArrivals />
      <BrowseByStyle />
      <Reports />
    </div>
  );
}
