export default function ProductCard({ product }) {
  const averageRating = Math.round(product.rating);

  return (
    <div className="flex flex-col place-self-center hover:bg-gray-50 transition-colors duration-150 rounded-lg cursor-pointer">
      <img
        src={product.images[0]}
        className="w-[180px] md:w-[295px] rounded-lg bg-[#F0EEED]"
      />
      <div className="flex flex-col text-left gap-y-2">
        <strong className="text-[13px] md:text-base xl:text-lg">
          {product.title}
        </strong>
        <div className="flex items-center gap-x-2">
          <img
            className="w-[87px] sm:w-[95px] md:w-[106px]"
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
