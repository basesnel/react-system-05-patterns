import type { JSX } from "react";
import { useEffect, useState } from "react";

type UseFetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: unknown;
};

type Props<T> = {
  url: string;
  render: (data: UseFetchResult<T>) => JSX.Element;
};

const DataFetcher = <T,>({ url, render }: Props<T>): JSX.Element => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("There is an error of data fetching");
        }
        return response.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return render({ data, loading, error });
};

export { DataFetcher };
