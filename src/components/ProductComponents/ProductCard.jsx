export default function ProductCard({ product }) {
  const averageRating = Math.round(product.rating);

  return (
    <div className="flex flex-col place-self-center hover:bg-gray-50 transition-colors duration-150 rounded-lg cursor-pointer w-full">
      <img src={product.images[0]} className="w-full rounded-lg bg-[#F0EEED]" />
      <div className="flex flex-col text-left gap-y-2">
        <strong className="text-[13px] lg:text-base xl:text-lg truncate">
          {product.title}
        </strong>
        <div className="flex items-center gap-x-2">
          <img
            className="w-[87px] sm:w-[95px] md:w-[80px]"
            src={`${
              import.meta.env.BASE_URL
            }/ratings/rating-${averageRating}0.png`}
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
