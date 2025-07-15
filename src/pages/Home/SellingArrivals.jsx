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

    setTopSelling(() => {
      let randomIndexes = [];

      let i = 0;
      while (i < 4) {
        const randomIndex = Math.floor(Math.random() * filteredData.length);

        if (randomIndexes.includes(filteredData[randomIndex])) continue;
        randomIndexes.push(filteredData[randomIndex]);

        i++;
      }

      return randomIndexes;
    });
  }, [data]);

  return (
    <div className="p-3 md:p-16">
      <section className="text-center">
        <h1 className="font-extrabold text-[32px] md:text-5xl mb-4 md:mb-10">
          NEW ARRIVALS
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 sm: md:grid-cols-4 md:grid-rows-1 md:place-items-center gap-2 p-2">
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
        <button className="max-w-[358px] w-full h-[46px] md:max-w-[218px] border border-black border-opacity-15 rounded-full mb-10 md:mb-16 hover:bg-gray-100 transition-colors duration-200">
          View all
        </button>

        <div className="w-full h-[1px] bg-gray-200 mb-10 md:mb-16"></div>
      </section>
      <section className="text-center">
        <h1 className="font-extrabold text-[32px] md:text-5xl mb-4 md:mb-10">
          TOP SELLING
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 md:place-items-center gap-2 p-2">
          {loading ? (
            <div className="col-span-2 row-span-2">
              <Load />
            </div>
          ) : (
            topSelling.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        <button className="max-w-[358px] w-full h-[46px] md:max-w-[218px] border border-black border-opacity-15 rounded-full hover:bg-gray-100 transition-colors duration-200">
          View all
        </button>
      </section>
    </div>
  );
}
