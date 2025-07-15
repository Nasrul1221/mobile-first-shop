import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import Load from "../../components/Load";
import ProductCard from "../../components/ProductCard";

export default function SellingArrivals() {
  const { data, loading } = useFetch(
    "https://dummyjson.com/products?limit=200"
  );

  const [newArrivals, setNewArrivals] = useState([]);
  const [topSelling, setTopSelling] = useState([]);

  useEffect(() => {
    if (!data) return;

    const filteredData = data.products.filter((p) =>
      [
        "mens-shirts",
        "womens-dresses",
        "mens-shoes",
        "womens-shoes",
        "womens-bags",
      ].includes(p.category)
    );

    setNewArrivals(() => {
      let randomIndexes = [];

      let i = 0;
      while (i < 4) {
        const randomIndex = Math.floor(Math.random() * filteredData.length);
        if (randomIndexes.includes(filteredData[randomIndex])) {
          continue;
        }
        randomIndexes.push(filteredData[randomIndex]);

        i++;
      }

      return randomIndexes;
    });

    console.log(newArrivals);

    // setTopSelling(filteredData.slice(4, 8));
  }, [data]);

  return (
    <div>
      <section className="text-center">
        <h1 className="font-extrabold text-[32px]">NEW ARRIVALS</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2">
          {loading ? (
            <div className="col-span-2 row-span-2">
              <Load />
            </div>
          ) : (
            newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
      <section></section>
    </div>
  );
}
