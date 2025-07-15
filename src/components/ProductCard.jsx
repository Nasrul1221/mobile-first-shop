import React, { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  const averageRating = Math.round(product.rating);
  console.log(averageRating);
  return (
    <div className="flex flex-col">
      <img
        src={product.images[0]}
        className="w-[180px] rounded-lg bg-[#F0EEED]"
      />
      <div className="flex flex-col text-left gap-y-2">
        <strong className="text-sm">{product.title}</strong>
        <div className="flex items-center gap-x-2">
          <img
            className="w-[106px]"
            src={`/ratings/rating-${averageRating}0.png`}
          />
          <p className="text-xs">
            {averageRating}/<span className="opacity-60">5</span>
          </p>
        </div>
        <strong className="text-xl">${product.price}</strong>
      </div>
    </div>
  );
}
