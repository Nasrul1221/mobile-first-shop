import { useContext } from "react";
import Load from "../../components/Load";
import ProductCard from "../../components/ProductComponents/ProductCard";
import { NavLink } from "react-router-dom";
import { FilteredProducts } from "@/Contexts/FilteredProductContext";

export default function SellingArrivals() {
  const { newArrivals, topSelling, loading } = useContext(FilteredProducts);

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
              <NavLink key={product.id} to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </NavLink>
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
              <NavLink key={product.id} to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </NavLink>
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
