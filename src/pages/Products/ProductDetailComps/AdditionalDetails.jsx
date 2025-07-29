import { useState } from "react";
import ProductAdditional from "./ProductAdditional";
import FAQs from "./FAQs";

const obj = {
  productAdditional: <ProductAdditional />,
  FAQs: <FAQs />,
};

export default function AdditionalDetails() {
  const [activeInfo, setActiveInfo] = useState("productAdditional");
  return (
    <div>
      <button onClick={() => setActiveInfo("productAdditional")}>
        Product Details
      </button>
      <button>Rating & Reviews</button>
      <button onClick={() => setActiveInfo("FAQs")}>FAQs</button>

      <div>{obj[activeInfo]} </div>
    </div>
  );
}
