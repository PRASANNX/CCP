import styles from "./LogoCarousel.module.scss";
import { brands } from "../../data/brands";

type LogoItem = {
  id: string;
  name: string;
  src?: string;
  href?: string;
  alt?: string;
};

// Filter to only industry giant brands
const industryGiants = [
  "times of india",
  "dainik bhaskar",
  "tvs",
  "hero",
  "mahavir sports",
  "canon",
  "fujifilm",
  "renaissance university",
  "davv indore",
  "itc",
  "chetak",
  "mangalam bajaj",
  "invest in indore",
  "wellness forever",
  "dave premium spices"
];

// Create logos array with only industry giants (each appears once)
const logos: LogoItem[] = brands
  .filter(brand => industryGiants.some(giant => brand.name.toLowerCase().includes(giant)))
  .map((brand) => ({
    id: brand.id,
    name: brand.name,
    src: brand.logoSrc,
    href: brand.website,
    alt: `${brand.name} logo`,
  }));

function isRealSrc(src?: string) {
  return Boolean(src && !src.includes("[FILL:"));
}

function isRealHref(href?: string) {
  return Boolean(href && !href.includes("[FILL:"));
}

function LogoCard({ logo }: { logo: LogoItem }) {
  const content = (
    <div className={styles.logoCardInner}>
      {isRealSrc(logo.src) ? (
        <img
          src={logo.src}
          alt={logo.alt || `${logo.name} logo`}
          className={styles.logoImage}
          loading="lazy"
        />
      ) : (
        <span className={styles.logoText}>{logo.name}</span>
      )}
    </div>
  );

  if (isRealHref(logo.href)) {
    return (
      <a
        href={logo.href}
        className={styles.logoCard}
        target="_blank"
        rel="noreferrer"
        aria-label={`${logo.name} website`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={styles.logoCard} aria-label={logo.name}>
      {content}
    </div>
  );
}

export function LogoCarousel() {
  return (
    <section
      className={styles.section}
      aria-labelledby="logo-carousel-title"
      data-component="logo-carousel"
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>Brands We've Worked With</p>

        <h2 id="logo-carousel-title" className={styles.title}>
          Trusted by Industry Leaders
        </h2>

        <p className={styles.description}>
          From startups to established corporations, we've helped brands across diverse sectors amplify their visibility and impact.
        </p>
      </div>

      <div className={styles.carousel} aria-label="Client logos carousel">
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        <div className={styles.track}>
          {logos.map((logo) => (
            <LogoCard key={logo.id} logo={logo} />
          ))}

          {/* Duplicate track for seamless scrolling. Hidden from accessibility tree. */}
          <div className={styles.cloneGroup} aria-hidden="true">
            {logos.map((logo) => (
              <div key={`${logo.id}-clone`} className={styles.logoCard}>
                <div className={styles.logoCardInner}>
                  {isRealSrc(logo.src) ? (
                    <img
                      src={logo.src}
                      alt=""
                      className={styles.logoImage}
                      loading="lazy"
                    />
                  ) : (
                    <span className={styles.logoText}>{logo.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
