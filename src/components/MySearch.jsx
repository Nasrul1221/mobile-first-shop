import { Search } from "lucide-react";
import { clsx } from "clsx";

// React && Hooks
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export default function MySearch({ props, className }) {
  const [value, setValue] = useState("");
  const debouncedQuery = useDebounce(value, 500);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    if (location.pathname === "/products") {
      if (debouncedQuery) {
        newParams.set("q", debouncedQuery);
      } else {
        newParams.delete("q");
      }

      setSearchParams(newParams);
    }
  }, [debouncedQuery, searchParams, setSearchParams, location.pathname]);

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
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
