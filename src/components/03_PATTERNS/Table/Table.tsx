import type { JSX } from "react";

type Props<T> = {
  data: T[];
  renderHeader: () => JSX.Element;
  renderRow: (data: T) => JSX.Element;
};

const Table = <T,>({ data, renderHeader, renderRow }: Props<T>) => {
  return (
    <table>
      <thead>
        <tr>{renderHeader()}</tr>
      </thead>
      <tbody>
        {data.map((row: T, index: number) => (
          <tr key={index}>{renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
