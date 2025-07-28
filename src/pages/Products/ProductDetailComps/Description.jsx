import { useState } from "react";

export default function Description({ product }) {
  const [chosenImg, setChosenImg] = useState(0);

  const changeImage = (index) => {
    setChosenImg(index);
  };

  return (
    <div className="mt-3 md:flex md:gap-x-3">
      <div className="flex flex-col items-center xl:flex-row ">
        <img
          src={product?.images?.[chosenImg]}
          className="rounded-2xl bg-[#F0EEED] xs:max-w-full md:max-w-[430px] xl:max-w-[444px] xl:max-h-[530px] xl:h-full xl:order-2"
        />
        <div className="grid gap-2 grid-cols-3 mt-3 xl:mt-0 xl:mr-3 xl:order-1 xl:grid-rows-3 xl:grid-cols-1">
          {product?.images?.map((image, index) => {
            if (index < 3) {
              return (
                <img
                  key={image}
                  src={image}
                  className={`w-full max-h-[150px] xs:max-h-[230px] md:max-h-[139px] xl:w-[152px] xl:h-[167px] rounded-2xl bg-[#F0EEED] cursor-pointer ${
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
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-extrabold max-w-[267px] mt-3">
          {product.title}
        </h1>
        <div className="flex items-center gap-x-2">
          <img
            src={`${import.meta.env.BASE_URL}/ratings/rating-${Math.round(
              product.rating
            )}0.png`}
            className="w-[105px] sm:w-[110px] md:w-[139px]"
          />
          <span>{Math.round(product.rating)}/5</span>
        </div>
        <p className="text-2xl font-medium">${product.price}</p>
        <p className="text-sm opacity-60 md:max-w-[400px]">
          {product.description}
        </p>
      </div>
    </div>
  );
}
