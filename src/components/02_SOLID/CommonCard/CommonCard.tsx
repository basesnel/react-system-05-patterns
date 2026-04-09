interface CardProps {
  renderHeader: () => React.ReactNode;
  renderBody: () => React.ReactNode;
}

import styles from "./styles.module.css";

// LSP - Liskov Substitution Principle (correct)
const CommonCard: React.FC<CardProps> = ({ renderHeader, renderBody }) => (
  <div className={styles.card}>
    <h3>{renderHeader()}</h3>
    <p>{renderBody()}</p>
  </div>
);

export { CommonCard };
