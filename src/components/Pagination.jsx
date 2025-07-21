import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function Pagination({ totalPages }) {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || 1;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex gap-x-7 items-center mt-3">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <NavLink
          to={`/products?page=${page}`}
          key={page}
          className={`hover:bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center ${
            parseInt(currentPage) === page
              ? "bg-black hover:bg-[#343434] text-white"
              : ""
          }`}
          onClick={scrollToTop}
        >
          {page}
        </NavLink>
      ))}
    </div>
  );
}
