// React
import React, { useContext, useEffect, useState } from "react";

// Components
import Breadcrumbs from "../Breadcrumbs";
import Load from "../Load";

// Router
import { useParams } from "react-router-dom";

// Context
import { FilteredProducts } from "@/Contexts/FilteredProductContext";

// Utils
import { scrollToTop } from "@/utils";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

export default function ProductDetail() {
  const { productID } = useParams();
  const { products, loading } = useContext(FilteredProducts);

  const [product, setProduct] = useState({});
  const [chosenImg, setChosenImg] = useState(0);

  const test = true;

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

  const changeImage = (index) => {
    setChosenImg(index);
  };

  return (
    <div className="px-3">
      <Breadcrumbs />
      {loading ? (
        <ProductDetailsSkeleton />
      ) : (
        <div className="mt-3">
          <div className="flex flex-col items-center">
            <img
              src={product?.images?.[chosenImg]}
              className="rounded-2xl bg-[#F0EEED]"
            />
            <div className="flex gap-5 mt-3">
              {product?.images?.map((image, index) => {
                if (index < 3) {
                  return (
                    <img
                      key={image}
                      src={image}
                      className={`w-[100px] rounded-2xl bg-[#F0EEED] cursor-pointer ${
                        chosenImg === index
                          ? "border-2 border-black"
                          : "hover:border-2 hover:border-[#7d7d7d]"
                      }`}
                      onClick={() => changeImage(index)}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
