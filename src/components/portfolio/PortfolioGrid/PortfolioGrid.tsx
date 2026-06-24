import type { ReactNode } from "react";
import styles from "./PortfolioGrid.module.scss";

type PortfolioGridProps = {
  children: ReactNode;
};

export function PortfolioGrid({ children }: PortfolioGridProps) {
  return <div className={styles.grid}>{children}</div>;
}
