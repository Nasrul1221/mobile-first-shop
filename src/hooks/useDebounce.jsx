import { useEffect, useState } from "react";

export default function useDebounce(query, milliseconds) {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, milliseconds);

    return () => clearTimeout(timeout);
  }, [query, milliseconds]);

  return debouncedQuery;
}
