import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setData(data);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}
