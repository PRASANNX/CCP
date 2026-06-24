import type { ReactNode } from "react";
import styles from "./SegmentGrid.module.scss";

type SegmentGridProps = {
  children: ReactNode;
};

export function SegmentGrid({ children }: SegmentGridProps) {
  return <div className={styles.grid}>{children}</div>;
}
