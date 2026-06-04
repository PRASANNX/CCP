import styles from "./Partners.module.scss";
import { partners } from "../../data/partners";

export function Partners() {
  return (
    <section className={styles.partners} data-component="partners">
      <div className={styles.inner}>
        <h2 className={`${styles.heading} display-s`} data-reveal>
          Segments We Work With
        </h2>

        <div className={styles.logoGrid} aria-label="Segments We Work With">
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
