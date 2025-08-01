import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import CartCard from "@/components/CartCard";
import { CartContext } from "@/Contexts/CartContext";
import { useContext, useEffect } from "react";

// Ludcide Icons
import { Tag } from "lucide-react";
import Break from "@/components/Break";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20">
      <Break />
      <Breadcrumbs />
      <h1 className="text-[32px] font-bold">YOUR CART</h1>
      <div className="flex flex-col justify-center items-start mt-3 md:flex-row gap-3">
        <section className="rounded-lg border p-4 flex flex-col gap-3 w-full">
          {state.cart.length > 0 ? (
            state.cart.map((product, index) => {
              if (state.cart[index + 1]) {
                return (
                  <>
                    <CartCard key={product.id} data={product} />
                    <Break />
                  </>
                );
              }

              return <CartCard key={product.id} data={product} />;
            })
          ) : (
            <p>Cart is empty</p>
          )}
        </section>
        <section className="rounded-lg border p-4 flex flex-col gap-3 w-full">
          <h2 className="font-bold text-xl">Order summary</h2>
          <div>
            <p className="flex justify-between">
              <span className="opacity-60">Subtotal:</span>{" "}
              <span className="font-bold text-xl">
                ${state.cartTotal.subTotal.toFixed(2)}
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

            <Break />

            <p className="flex justify-between">
              <span className="">Total:</span>{" "}
              <span className="font-bold text-xl">
                ${state.cartTotal.total.toFixed(2)}
              </span>
            </p>
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-3 rounded-full bg-[#F0F0F0] flex items-center gap-3 w-full">
              <Tag className="w-5 opacity-40" />
              <input
                type="text"
                name="promo"
                id="promo"
                className="text-sm outline-none bg-[#F0F0F0] w-full"
                placeholder="Add promo code"
              />
            </div>
            <Button variant="defaultReversed">Apply</Button>
          </div>
          <div>
            <Button variant="defaultReversed" className="w-full py-3">
              Go to Checkout
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
