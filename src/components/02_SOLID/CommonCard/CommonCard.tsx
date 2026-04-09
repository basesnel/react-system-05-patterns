interface CardProps {
  renderHeader: () => React.ReactNode;
  renderBody: () => React.ReactNode;
}

// LSP - Liskov Substitution Principle (correct)
const CommonCard: React.FC<CardProps> = ({ renderHeader, renderBody }) => (
  <div className="card">
    <h3>{renderHeader()}</h3>
    <p>{renderBody()}</p>
  </div>
);

export { CommonCard };
