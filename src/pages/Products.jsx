import Breadcrumbs from "@/components/Breadcrumbs";
import Load from "@/components/Load";
import ProductCard from "@/components/ProductCard";
import { FilteredProducts } from "@/Contexts/FilteredProductContext";
import { useFetch } from "@/hooks/useFetch";
import { useContext } from "react";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/Pagination";

export default function Products() {
  const { products, loading } = useContext(FilteredProducts);
  const { paginatedProducts, totalPages } = usePagination();

  return (
    <div className="flex">
      <section className="p-2">Filtering</section>
      <section className="p-2 flex flex-col items-start">
        <Breadcrumbs />
        <div className="flex flex-col items-center">
          {loading ? (
            <Load />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </div>
  );
}
