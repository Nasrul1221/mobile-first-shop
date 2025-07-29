// React
import React, { useContext, useEffect, useState } from "react";

// Components
import Breadcrumbs from "../../components/Breadcrumbs";

// Router
import { useParams } from "react-router-dom";

// Context
import { FilteredProducts } from "@/Contexts/FilteredProductContext";

// Utils
import { scrollToTop } from "@/utils";
import ProductDetailsSkeleton from "../../components/ProductComponents/ProductDetailsSkeleton";
import MainDetails from "./ProductDetailComps/MainDetails";
import AdditionalDetails from "./ProductDetailComps/AdditionalDetails";
import ProductAdditional from "./ProductDetailComps/ProductAdditional";

export default function ProductDetail() {
  const { productID } = useParams();
  const { products, loading } = useContext(FilteredProducts);

  const [product, setProduct] = useState({});
  const [comp, setComp] = useState(ProductAdditional);

  useEffect(() => {
    if (products.length && productID) {
      const foundProduct = products.find(
        (product) => product.id === parseInt(productID)
      );

      setProduct(foundProduct);
      console.log(product);
    }
  }, [products]);

  useEffect(() => scrollToTop(), []);

  return (
    <div className="px-5 sm:px-7 md:px-9 lg:px-20">
      <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
      <Breadcrumbs />
      {loading ? (
        <ProductDetailsSkeleton />
      ) : (
        <div>
          <MainDetails product={product} />

          <AdditionalDetails>{comp}</AdditionalDetails>
        </div>
      )}
    </div>
  );
}
