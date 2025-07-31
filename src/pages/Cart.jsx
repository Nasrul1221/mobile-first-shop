import Breadcrumbs from "@/components/Breadcrumbs";
import CartCard from "@/components/CartCard";
import { CartContext } from "@/Contexts/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { state } = useContext(CartContext);

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20">
      <Breadcrumbs />
      <h1 className="text-[32px] font-bold">YOUR CART</h1>
      <section className="rounded-lg border p-4 flex flex-col gap-3">
        {state.cart.map((product) => (
          <CartCard key={product.id} data={product} />
        ))}
      </section>
      <section></section>
    </div>
  );
}
