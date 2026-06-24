import { Link } from "react-router-dom";
import type { SegmentPageData } from "../../../data/segments";
import styles from "./SegmentCard.module.scss";

type SegmentCardProps = {
  segment: SegmentPageData;
};

export function SegmentCard({ segment }: SegmentCardProps) {
  return (
    <Link to={`/segments/${segment.slug}`} className={styles.card} data-reveal>
      <div>
        <h3 className={styles.title}>{segment.title}</h3>
        <p className={styles.description}>{segment.description}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.iconWrap} aria-hidden="true">
          &rarr;
        </div>
      </div>
    </Link>
  );
}
