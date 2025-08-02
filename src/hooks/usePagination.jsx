import { useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilteredProducts } from "@/Contexts/FilteredProductContext";
import filter from "./filter";

export default function usePagination(category, q) {
  const { products, topSelling, newArrivals } = useContext(FilteredProducts);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (category === "top-selling") {
      if (q) {
        const updated = filter(q, topSelling);

        setData(updated);
        return;
      }
      setData(topSelling);
    } else if (category === "new-arrivals") {
      if (q) {
        const updated = filter(q, newArrivals);

        setData(updated);
        return;
      }
      setData(newArrivals);
    } else if (category === "all") {
      if (q) {
        const updated = filter(q, products);

        setData(updated);
        return;
      }
      setData(products);
    }
  }, [products, category, topSelling, newArrivals, q]);

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  const productsPerPage = 9;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = useMemo(
    () => data?.slice(startIndex, endIndex),
    [data, startIndex, endIndex]
  );
  const totalPages = Math.ceil(data?.length / productsPerPage);

  return { paginatedProducts, totalPages };
}
