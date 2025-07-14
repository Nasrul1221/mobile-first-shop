import React from "react";

export default function TitlePage() {
  return (
    <section className="bg-[#F2F0F1] h-[853px] w-full md:h-[603px] pt-5 pl-5 pr-5 md:pt-16 md:pl-16 md-pr-16 md:grid md:grid-cols-2">
      <div>
        <div>
          <h1 className="text-4xl md:text-[64px] font-extrabold w-[315px] md:w-[577px] leading-[34px] md:leading-[64px] mt-7">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm opacity-60 md:text-base md:max-w-[545px] md:w-full mt-4">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black max-w-[358px] md:max-w-[210px] w-full h-[52px] rounded-full text-white mt-4 hover:bg-[#1d1d1d] active:bg-[#232323] duration-200">
            Shop now
          </button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 md:grid-rows-1 place-items-center mt-4 gap-y-2 mr-4">
          <div>
            <strong className="text-2xl">200+</strong>
            <p className="text-xs text-nowrap">International Brands</p>
          </div>

          <div className="h-full w-[1px] bg-gray-300"></div>

          <div>
            <strong className="text-2xl">2,000+</strong>
            <p className="text-xs text-nowrap">High-Quality Products</p>
          </div>

          <div className="hidden md:block h-full w-[1px] bg-gray-300"></div>

          <div className="col-span-3 md:col-span-1">
            <strong className="text-2xl">30,000+</strong>
            <p className="text-xs text-nowrap">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="w-full max-h-[448px] h-full">
        <div className="bg-gray-500 w-full h-full flex items-center justify-center">
          <p className="text-white">Here must be an image</p>
        </div>
      </div>
    </section>
  );
}
