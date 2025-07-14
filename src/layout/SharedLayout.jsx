import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}
