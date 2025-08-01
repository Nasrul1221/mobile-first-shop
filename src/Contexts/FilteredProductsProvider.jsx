import { FilteredProducts } from "./FilteredProductContext";
import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";

export default function FilteredProductsProvider({ children }) {
  const { data, loading } = useFetch(
    "https://dummyjson.com/products?limit=200"
  );

  const [newArrivals, setNewArrivals] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!data) return;

    const filteredData = data.products.filter((p) =>
      [
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-dresses",
        "womens-shoes",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
        "tops",
      ].includes(p.category)
    );
    setProducts(filteredData);

    setNewArrivals(() => {
      let randomIndexes = [];

      let i = 0;
      while (i < 10) {
        const randomIndex = Math.floor(Math.random() * filteredData.length);
        if (randomIndexes.includes(filteredData[randomIndex])) {
          continue;
        }
        randomIndexes.push(filteredData[randomIndex]);

        i++;
      }

      return randomIndexes;
    });

    setTopSelling(() => {
      let randomIndexes = [];

      let i = 0;
      while (i < 10) {
        const randomIndex = Math.floor(Math.random() * filteredData.length);

        if (randomIndexes.includes(filteredData[randomIndex])) continue;
        randomIndexes.push(filteredData[randomIndex]);

        i++;
      }

      return randomIndexes;
    });
  }, [data]);

  const value = { products, newArrivals, topSelling, loading };

  return (
    <FilteredProducts.Provider value={value}>
      {children}
    </FilteredProducts.Provider>
  );
}
