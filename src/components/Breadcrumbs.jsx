import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const toCapital = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length);
  };

  return (
    <nav className="ml-2 flex gap-x-2">
      <NavLink to="/" className="opacity-60">
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
              } ml-2`}
            >
              {toCapital(name)}
            </NavLink>
          </span>
        );
      })}
    </nav>
  );
}
