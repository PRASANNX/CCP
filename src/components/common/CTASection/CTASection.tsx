import { Link } from "react-router-dom";
import styles from "./CTASection.module.scss";

type CTASectionProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
};

export function CTASection({
  title,
  description,
  buttonLabel = "Contact Us",
  buttonHref,
  onButtonClick,
}: CTASectionProps) {
  return (
    <section className={styles.cta} data-reveal>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {buttonHref ? (
          <Link to={buttonHref} className="btn btn--outline">
            {buttonLabel}
          </Link>
        ) : (
          <button className="btn btn--outline" onClick={onButtonClick}>
            {buttonLabel}
          </button>
        )}
      </div>
    </section>
  );
}
