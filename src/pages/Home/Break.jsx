import React from "react";

export default function Break() {
  return (
    <section className="max-w-full w-full bg-black h-[146px] md:h-[122px] m-0 p-5 grid grid-cols-3 grid-rows-2 md:grid-rows-1 md:grid-cols-5 gap-3 text-center place-items-center">
      <strong className="text-white text-2xl">VERSACE</strong>
      <strong className="text-white text-2xl">ZARA</strong>
      <strong className="text-white text-2xl">GUCCI</strong>
      <div className="col-span-3 md:col-span-1 md:hidden">
        <strong className="text-white text-2xl mr-7">PRADA</strong>
        <strong className="text-white text-2xl">Calvin Klein</strong>
      </div>

      <strong className="text-white text-2xl hidden md:block">PRADA</strong>
      <strong className="text-white text-2xl hidden md:block">
        Calvin Klein
      </strong>
    </section>
  );
}
