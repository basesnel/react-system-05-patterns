import { useEffect, useState } from "react";

// type UseFetchResult<T> = {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
// };

const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return render({ data, loading, error });
};

export { DataFetcher };
