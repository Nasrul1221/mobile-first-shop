import React from "react";
import TitlePage from "./Home/TitlePage";
import Break from "./Home/Break";
import SellingArrivals from "./Home/SellingArrivals";
import BrowseByStyle from "./Home/BrowseByStyle";

export default function Home() {
  return (
    <div>
      <TitlePage />
      <Break />
      <SellingArrivals />
      <BrowseByStyle />
    </div>
  );
}
