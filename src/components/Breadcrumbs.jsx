import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const toCapital = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length);
  };

  return (
    <nav className="flex gap-x-2 items-center">
      <NavLink to="/" className="opacity-60 text-sm sm:text-base">
        Home
      </NavLink>
      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/") + "/";
        const name = decodeURIComponent(value);

        return (
          <span key={to}>
            {" > "}
            <NavLink
              to={to}
              className={`${
                pathnames.length - 1 === index ? "" : "opacity-60"
              } ml-2 text-sm sm:text-base`}
            >
              {toCapital(name)}
            </NavLink>
          </span>
        );
      })}
    </nav>
  );
}
