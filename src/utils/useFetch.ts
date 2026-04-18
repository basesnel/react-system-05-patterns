import { useEffect, useState } from "react";

type UseFetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("There is an error of data fetching");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("Fetching data is failed");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export { useFetch };
