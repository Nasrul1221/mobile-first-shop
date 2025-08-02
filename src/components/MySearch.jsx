import { Search } from "lucide-react";
import { clsx } from "clsx";

// React && Hooks
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function MySearch({ props, className }) {
  const [value, setValue] = useState("");
  const debouncedQuery = useDebounce(value, 500);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (window.location.href.includes("/products")) {
      if (debouncedQuery.trim() !== "") {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("q", debouncedQuery);
        navigate(`/products?${newParams}`);
      } else {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete("q");
        navigate(`/products?${newParams}`);
      }
    }
  }, [debouncedQuery, searchParams]);

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
