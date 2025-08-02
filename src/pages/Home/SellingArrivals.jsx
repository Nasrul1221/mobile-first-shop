import { useContext } from "react";
import Load from "../../components/Load";
import ProductCard from "../../components/ProductComponents/ProductCard";
import { NavLink } from "react-router-dom";
import { FilteredProducts } from "@/Contexts/FilteredProductContext";
import Button from "@/components/Button";
import Break from "@/components/Break";

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
            newArrivals.slice(0, 4).map((product) => (
              <NavLink key={product.id} to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </NavLink>
            ))
          )}
        </div>
        <NavLink to="/products?category=new-arrivals">
          <Button
            variant="whiteBordered"
            className="max-w-[358px] w-full h-[46px] md:max-w-[218px] mt-3"
          >
            View all
          </Button>
        </NavLink>

        <Break />
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
            topSelling.slice(0, 4).map((product) => (
              <NavLink key={product.id} to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </NavLink>
            ))
          )}
        </div>

        <NavLink to="/products?category=top-selling">
          <Button
            variant="whiteBordered"
            className="max-w-[358px] w-full h-[46px] md:max-w-[218px] mt-3"
          >
            View all
          </Button>
        </NavLink>
      </section>
    </div>
  );
}
