import { useState } from "react";
import ProductAdditional from "./ProductAdditional";
import FAQs from "./FAQs";
import RatingReviews from "./RatingReviews";

const obj = {
  productAdditional: <ProductAdditional />,
  ratingReviews: <RatingReviews />,
  FAQs: <FAQs />,
};

export default function AdditionalDetails() {
  const [activeInfo, setActiveInfo] = useState("productAdditional");
  return (
    <div className="flex flex-col  justify-center mt-4">
      <div className="flex w-full">
        <button
          className={`w-full border-b pb-2 hover:border-b-black ${
            activeInfo === "productAdditional" && "border-b-black"
          }`}
          onClick={() => setActiveInfo("productAdditional")}
        >
          Product Details
        </button>
        <button
          className={`w-full border-b pb-2 hover:border-b-black ${
            activeInfo === "ratingReviews" && "border-b-black"
          }`}
          onClick={() => setActiveInfo("ratingReviews")}
        >
          Rating & Reviews
        </button>
        <button
          className={`w-full border-b pb-2 hover:border-b-black ${
            activeInfo === "FAQs" && "border-b-black"
          }`}
          onClick={() => setActiveInfo("FAQs")}
        >
          FAQs
        </button>
      </div>

      {obj[activeInfo]}
    </div>
  );
}
