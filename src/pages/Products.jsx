// Context
import { FilteredProducts } from "@/Contexts/FilteredProductContext";

// React && Custon hooks
import { useContext, useState } from "react";
import usePagination from "@/hooks/usePagination";

// Components
import Load from "@/components/Load";
import Breadcrumbs from "@/components/Breadcrumbs";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";

// Icons
import { SlidersVertical } from "lucide-react";
import Filters from "./Products/Filters";

export default function Products() {
  const { loading } = useContext(FilteredProducts);
  const { paginatedProducts, totalPages } = usePagination();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="px-4 sm:px-8 md:px-14">
      {/* <div
        className={`
          fixed left-0 right-0 bottom-0 top-32
          bg-red-300
          transform transition-transform duration-300 z-50
          ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      >
        Filters
      </div> */}
      <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
      <Breadcrumbs />
      <div className="flex mt-1 sm:mt-3">
        <Filters isOpen={isOpen} handleClose={handleClose} />
        <section className="p-1 xs:ml-3 md:ml-4">
          <div className="flex items-center mb-5 justify-between">
            <div className="flex items-center md:justify-between md:w-full">
              <h1 className="text-2xl sm:text-[28px] md:text-[32px] font-bold">
                Clothes
              </h1>
              <p className="text-sm sm:text-base opacity-60 ml-2">
                Showing 1-10 of 100 Products
                <span className="text-sm sm:text-base hidden md:inline md:ml-2">
                  Sort by:{" "}
                  <span className="relative font-bold opacity-100 after:content-[''] after:w-[10px] after:h-[10px] after:border-[2px] after:border-black after:absolute after:rotate-45 after:border-t-transparent after:border-l-transparent after:top-1/3 after:-translate-y-[50%] after:-right-5">
                    Most popular
                  </span>
                </span>
              </p>
            </div>
            <SlidersVertical onClick={handleOpen} className="md:hidden" />
          </div>
          <div className="flex flex-col items-center">
            {loading ? (
              <Load />
            ) : (
              <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-3 gap-3">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            <Pagination totalPages={totalPages} />
          </div>
        </section>
      </div>
    </div>
  );
}
