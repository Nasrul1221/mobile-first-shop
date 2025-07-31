import Button from "@/components/Button";
import { CartContext } from "@/Contexts/CartContext";
import { useContext, useEffect, useState } from "react";

export default function MainDetails({ product }) {
  const [chosenImg, setChosenImg] = useState(0);
  const [count, setCount] = useState(1);
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    console.log(state.cart);
  }, [state.cart]);

  const changeImage = (index) => {
    setChosenImg(index);
  };

  return (
    <div className="mt-3 md:flex md:gap-x-3">
      <div className="flex flex-col items-center 2xl:flex-row ">
        <img
          src={product?.images?.[chosenImg]}
          className="rounded-2xl bg-[#F0EEED] xs:max-w-full md:max-w-[470px] 2xl:max-w-[414px] 2xl:max-h-[550px] 2xl:h-full 2xl:order-2"
        />
        <div className="grid gap-2 grid-cols-3 mt-3 2xl:mt-0 2xl:mr-3 2xl:order-1 2xl:grid-rows-3 2xl:grid-cols-1">
          {product?.images?.map((image, index) => {
            if (index < 3) {
              return (
                <img
                  key={image}
                  src={image}
                  className={`w-full max-h-[150px] xs:max-h-[230px] md:max-h-[159px] xl:w-[152px] xl:h-[167px] rounded-2xl bg-[#F0EEED] cursor-pointer ${
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
        <h1 className="text-2xl font-extrabold mt-3 md:mt-0">
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
        <p className="text-sm opacity-60 md:max-w-[700px]">
          {product.description}
        </p>

        <div className="w-full h-[1px] bg-gray-200 my-2" />

        <div>
          <p className="text-sm opacity-60">Select colors</p>
          <div className="flex gap-x-2 mt-2">
            <div className="w-[40px] h-[40px] bg-[#4F4631] rounded-full hover:bg-[#3F3926]"></div>
            <div className="w-[40px] h-[40px] bg-[#314F4A] rounded-full hover:bg-[#253D39]"></div>
            <div className="w-[40px] h-[40px] bg-[#31344F] rounded-full hover:bg-[#25273F]"></div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-200 my-2" />

        <div>
          <p className="text-sm opacity-60">Choose size</p>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <Button>Small</Button>
            <Button>Medium</Button>
            <Button>Large</Button>
            <Button>X-Large</Button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-200 my-2" />

        <div className="flex gap-x-2 justify-between">
          <div className="flex bg-[#F0F0F0] items-center gap-x-4 px-4 py-1 rounded-full">
            <div className="text-2xl">
              <button
                onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))}
              >
                —
              </button>
            </div>
            <div className="text-md">{count}</div>
            <div className="text-2xl">
              <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            </div>
          </div>
          <Button
            variant="defaultReversed"
            className="w-full"
            onClick={() =>
              dispatch({
                type: "ADD",
                payload: {
                  thumbnail: product.images[0],
                  title: product.title,
                  price: product.price,
                  id: product.id,
                  quantity: count,
                },
              })
            }
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
