import React from "react";

export default function BrowseByStyle() {
  return (
    <div className="bg-[#F0F0F0] m-3 sm:m-12 md:m-16 p-4 sm:p-6 md:p-8 rounded-lg text-center">
      <h1 className="font-extrabold text-[32px] md:text-5xl mb-4 md:mb-10">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="grid grid-rows-4 gap-2 sm:grid-cols-3 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 md:gap-3">
        <div className="bg-white h-[170px] sm:h-[209px] md:h-[209px] rounded-lg">
          CASUAL
        </div>
        <div className="bg-white md:col-span-2 sm:col-span-2 md:h-[209px] rounded-lg">
          CASUAL
        </div>
        <div className="bg-white md:col-span-2 sm:col-span-2 md:h-[209px] rounded-lg">
          CASUAL
        </div>
        <div className="bg-white md:h-[209px] rounded-lg">CASUAL</div>
      </div>
    </div>
  );
}
// [grid-template-columns:50px_100px_75px]
