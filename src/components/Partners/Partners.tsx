import styles from "./Partners.module.scss";
import { partners } from "../../data/partners";

export function Partners() {
  return (
    <section className={styles.partners} data-component="partners">
      <div className={styles.inner}>
        <h2 className={`${styles.heading} display-s`} data-reveal>
          [FILL: Innovation Partners title]
        </h2>

        <div className={styles.logoGrid} aria-label="[FILL: partners grid aria label]">
          {partners.map((partner) => (
            <div key={partner.name} className={styles.logoItem} data-reveal>
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
