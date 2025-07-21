import { FilteredProducts } from "@/Contexts/FilteredProductContext";
import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export default function usePagination() {
  const { products } = useContext(FilteredProducts);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  const productsPerPage = 9;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return { paginatedProducts, totalPages };
}
