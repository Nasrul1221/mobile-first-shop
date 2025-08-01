import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilteredProducts } from "@/Contexts/FilteredProductContext";

export default function usePagination(category) {
  const { products, topSelling } = useContext(FilteredProducts);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (category === "top-selling") {
      setData(topSelling);
    } else if (category === "all") {
      setData(products);
    }
  }, [products, category, topSelling]);

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  const productsPerPage = 9;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = data?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data?.length / productsPerPage);

  return { paginatedProducts, totalPages };
}
