import { CartContext } from "@/Contexts/CartContext";
import { useContext, useEffect, useState } from "react";

// Lucide Icons
import { Trash2 } from "lucide-react";

const size = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

export default function CartCard({ data }) {
  const { state, dispatch } = useContext(CartContext);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * size.length);
    setRandomIndex(index);
  }, []);

  console.log(state);

  return (
    <div className="flex gap-3">
      <div className="bg-[#F0EEED] max-w-[100px] rounded-lg">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">{data.title}</h2>
            <Trash2
              className="text-red-500"
              onClick={() =>
                dispatch({ type: "DELETE_FROM_CART", payload: data })
              }
            />
          </div>
          <p className="text-xs">
            Size: <span className="opacity-60">{size[randomIndex]}</span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">${data.price}</p>
          <div className="flex bg-[#F0F0F0] items-center gap-x-4 px-4 py-1 rounded-full">
            <div className="text-2xl">
              <button
                onClick={() =>
                  dispatch({ type: "DECREASE_QUANTITY", payload: data })
                }
              >
                —
              </button>
            </div>
            <div className="text-md">{data.quantity}</div>
            <div className="text-2xl">
              <button
                onClick={() =>
                  dispatch({ type: "INCREASE_QUANTITY", payload: data })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
