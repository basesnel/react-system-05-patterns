interface CardProps {
  renderHeader: () => React.ReactNode;
  renderBody: () => React.ReactNode;
}

const CommonCard: React.FC<CardProps> = ({ renderHeader, renderBody }) => (
  <div className="card">
    <h3>{renderHeader()}</h3>
    <p>{renderBody()}</p>
  </div>
);

export { CommonCard };
