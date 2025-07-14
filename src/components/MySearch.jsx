import { Search } from "lucide-react";
import { clsx } from "clsx";

export default function MySearch({ props, className }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "flex md:bg-[#F0F0F0] md:p-3 md:max-w-[577px] md:w-full md:rounded-full items-center"
      )}
    >
      <Search className="md:text-[#000000] md:opacity-40 " />
      <input
        className="hidden md:block md:bg-[#F0F0F0] md:w-full outline-none ml-3"
        placeholder="Search for products..."
      />
    </div>
  );
}
