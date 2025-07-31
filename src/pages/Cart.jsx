import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import CartCard from "@/components/CartCard";
import { CartContext } from "@/Contexts/CartContext";
import { useContext, useEffect } from "react";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20 flex flex-col gap-y-3">
      <Breadcrumbs />
      <h1 className="text-[32px] font-bold">YOUR CART</h1>
      <section className="rounded-lg border p-4 flex flex-col gap-3">
        {state.cart.length > 0 ? (
          state.cart.map((product) => (
            <CartCard key={product.id} data={product} />
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </section>
      <section className="rounded-lg border p-4 flex flex-col gap-3">
        <h2>Order summary</h2>
        <div>
          <p className="flex justify-between">
            <span className="opacity-60">Subtotal:</span>{" "}
            <span className="font-bold text-xl">
              ${state.cartTotal.subTotal}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="opacity-60">Discount:</span>{" "}
            <span className="font-bold text-xl">
              ${state.cartTotal.discount}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="opacity-60">Delivery Fee:</span>
            <span className="font-bold text-xl">
              ${state.cart.length > 0 ? state.cartTotal.deliveryFee : 0}
            </span>
          </p>

          <div className="w-full h-[1px] bg-gray-200 my-3"></div>

          <p className="flex justify-between">
            <span className="">Total:</span>{" "}
            <span className="font-bold text-xl">${state.cartTotal.total}</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <input
              type="text"
              name="promo"
              id="promo"
              className="text-sm px-4 py-2 rounded-full outline-none bg-[#F0F0F0]"
              placeholder="Add promo code"
            />
          </div>
          <Button variant="defaultReversed">Apply</Button>
        </div>
        <div></div>
      </section>
    </div>
  );
}
