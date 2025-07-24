// Style classes
import clsx from "clsx";

// Icons
import { SlidersVertical } from "lucide-react";

// Components
import Clothes from "./FilterOptions/Clothes";
import Price from "./FilterOptions/Price";
import Colors from "./FilterOptions/Colors";
import Size from "./FilterOptions/Size";
import DressStyle from "./FilterOptions/DressStyle";

export default function Filters({ className, isOpen, handleClose }) {
  return (
    <div className="md:w-[295px]">
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-25 md:hidden"></div>
      )}
      <section
        className={clsx(
          className,
          `${
            isOpen ? "translate-y-0" : "translate-y-full"
          } overflow-y-auto max-h-[calc(100vh-9rem) p-4 rounded-t-xl fixed bottom-0 left-0 right-0 top-32 z-50 transform transition-transform duration-300 md:transform-none md:transition-none md:static md:block md:w-full bg-white md:rounded-xl md:border ease-in`
        )}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium">Filters</h1>
          <button className="md:hidden" onClick={handleClose}>
            Close
          </button>
          <SlidersVertical className="hidden md:block opacity-40" />
        </div>

        <div className="w-full h-[1px] bg-gray-200 mt-4"></div>

        <Clothes />

        <div className="w-full h-[1px] bg-gray-200 mb-4"></div>

        <Price />

        <div className="w-full h-[1px] bg-gray-200 mt-4"></div>

        <Colors />

        <div className="w-full h-[1px] bg-gray-200 mt-4"></div>

        <Size />

        <div className="w-full h-[1px] bg-gray-200 mt-4"></div>

        <DressStyle />

        <button className="w-full border-[2px] border-black bg-black text-white py-2 rounded-full hover:bg-white hover:text-black active:bg-black active:text-white transition-colors duration-200">
          Apply Filter
        </button>
      </section>
    </div>
  );
}
