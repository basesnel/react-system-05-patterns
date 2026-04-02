import { useState } from "react";
import type { ComponentType } from "react";

const withPagination = <P,>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    const [page, setPage] = useState(1);

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => Math.max(prev + 1, 1));

    return (
      <div>
        <WrappedComponent {...props} page={page} />
        <div>
          <button onClick={prevPage}>Prev</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    );
  };
};

export { withPagination };
