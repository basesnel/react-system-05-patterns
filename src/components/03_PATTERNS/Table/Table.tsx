const Table = ({ data, renderHeader, renderRow }) => {
  return (
    <table>
      <thead>
        <tr>{renderHeader()}</tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>{renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
