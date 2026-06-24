import type { SegmentPageData } from "../../../data/segments";
import styles from "./SegmentServices.module.scss";

type SegmentServicesProps = {
  segment: SegmentPageData;
};

export function SegmentServices({ segment }: SegmentServicesProps) {
  if (!segment.services?.length && !segment.deliverables?.length) return null;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {segment.services?.length > 0 && (
          <div data-reveal>
            <h2 className={styles.title}>Services</h2>
            <div className={styles.tags}>
              {segment.services.map((item) => (
                <span key={item} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {segment.deliverables?.length > 0 && (
          <div data-reveal>
            <h2 className={styles.title}>Deliverables</h2>
            <div className={styles.tags}>
              {segment.deliverables.map((item) => (
                <span key={item} className={styles.tag} style={{ background: 'var(--black)', color: 'var(--white)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
