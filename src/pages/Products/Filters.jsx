// Icons
import clsx from "clsx";
import { SlidersVertical } from "lucide-react";

export default function Filters({ className, isOpen, handleClose }) {
  return (
    <div className="md:w-[250px]">
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
          <h1 className="text-xl">Filters</h1>
          <button className="md:hidden" onClick={handleClose}>
            Close
          </button>
          <SlidersVertical className="hidden md:block opacity-40" />
        </div>
      </section>
    </div>
  );
}
