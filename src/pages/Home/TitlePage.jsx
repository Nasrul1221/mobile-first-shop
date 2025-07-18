import React from "react";

export default function TitlePage() {
  return (
    <section className="bg-[#F2F0F1] h-full w-full md:max-h-[663px] pt-5 pl-5 pr-5 md:pt-0 md:pl-10 md:grid md:grid-cols-2 gap-x-3">
      <div className="flex flex-col gap-y-16">
        <div>
          <h1 className="text-4xl md:text-[48px] lg:text-[64px] font-extrabold w-[315px] md:max-w-[577px] md:w-full leading-[34px] md:leading-[64px] mt-7 overflow-hidden">
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
        <div className="grid grid-cols-3 xl:grid-cols-5 xl:grid-rows-1 place-items-center mt-4 gap-y-2 mr-4 md:mb-4 w-full">
          <div>
            <strong className="text-2xl md:text-4xl">200+</strong>
            <p className="text-xs text-nowrap">International Brands</p>
          </div>

          <div className="h-full w-[1px] bg-gray-300"></div>

          <div>
            <strong className="text-2xl md:text-4xl">2,000+</strong>
            <p className="text-xs text-nowrap">High-Quality Products</p>
          </div>

          <div className="hidden xl:block h-full w-[1px] bg-gray-300"></div>

          <div className="col-span-3 xl:col-span-1">
            <strong className="text-2xl md:text-4xl">30,000+</strong>
            <p className="text-xs text-nowrap mb-3 md:mb-0">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="max-h-[663px] max-w-full h-full md:w-full md:h-full">
        <img
          alt="Two fashion models pose"
          src="/titlePage.png"
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
