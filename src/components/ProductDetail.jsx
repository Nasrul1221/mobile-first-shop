import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { useParams } from "react-router-dom";
import { FilteredProducts } from "@/Contexts/FilteredProductContext";
import Load from "./Load";

// Utils
import { scrollToTop } from "@/utils";

export default function ProductDetail() {
  const { productID } = useParams();
  const { products, loading } = useContext(FilteredProducts);
  const [product, setProduct] = useState({});

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
    <div>
      <Breadcrumbs />
      {loading ? (
        <Load />
      ) : (
        <div>
          <img src={product?.images?.[0]} />
        </div>
      )}
    </div>
  );
}
