import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FounderProfile.module.scss";
import type { FounderProfileData } from "../../data/founderProfile";

gsap.registerPlugin(ScrollTrigger);

type FounderProfileProps = {
  founder: FounderProfileData;
};

export function FounderProfile({ founder }: FounderProfileProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasPhoto = Boolean(founder.photo?.src);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Fade-in the whole card
      gsap.fromTo(
        section.querySelector("[data-founder-card]"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
          },
        }
      );

      // Stagger the content children
      gsap.fromTo(
        section.querySelectorAll("[data-founder-reveal]"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby={`${founder.id}-title`}
      data-component="founder-profile"
    >
      <div className={styles.founderProfile} data-founder-card>
        {/* ── Portrait ── */}
        <div
          className={`${styles.media} ${!hasPhoto ? styles.emptyMedia : ""}`}
        >
          {hasPhoto ? (
            <img
              className={styles.image}
              src={founder.photo!.src}
              alt={founder.photo!.alt || `${founder.name} portrait`}
              loading="lazy"
            />
          ) : (
            <span>[FILL: founder photo]</span>
          )}
        </div>

        {/* ── Quote / Bio ── */}
        <div className={styles.content}>
          {founder.eyebrow && (
            <p className={styles.eyebrow} data-founder-reveal>
              {founder.eyebrow}
            </p>
          )}

          {founder.headline && (
            <p className={styles.headline} data-founder-reveal>
              {founder.headline}
            </p>
          )}

          <h2
            id={`${founder.id}-title`}
            className={styles.quote}
            data-founder-reveal
          >
            &ldquo;{founder.quote || "[FILL: founder quote]"}&rdquo;
          </h2>

          <div className={styles.meta} data-founder-reveal>
            <strong>{founder.name || "[FILL: founder name]"}</strong>
            {founder.title && <span>{founder.title}</span>}
            {founder.company && <span>{founder.company}</span>}
          </div>

          {founder.bio && (
            <p className={styles.bio} data-founder-reveal>
              {founder.bio}
            </p>
          )}

          {founder.links && founder.links.length > 0 && (
            <nav
              className={styles.contentLinks}
              aria-label={`${founder.name} links`}
              data-founder-reveal
            >
              {founder.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel || link.label}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* ── Info Card ── */}
        <aside
          className={styles.card}
          aria-label={`${founder.name} profile details`}
        >
          <div>
            <h3 className={styles.cardHeading}>About</h3>

            {(founder.experience || founder.location) && (
              <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
                {founder.experience && (
                  <div className={styles.detailRow}>
                    <span>📅</span>
                    <strong>{founder.experience}</strong>
                    <span>experience</span>
                  </div>
                )}
                {founder.location && (
                  <div className={styles.detailRow}>
                    <span>📍</span>
                    <strong>{founder.location}</strong>
                  </div>
                )}
              </div>
            )}
          </div>

          {founder.highlights && founder.highlights.length > 0 ? (
            <ul className={styles.highlights}>
              {founder.highlights.map((item, index) => (
                <li key={item.label}>
                  <span className={styles.icon} aria-hidden="true">
                    {item.icon || String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <strong>{item.label}</strong>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyText}>[FILL: founder highlights]</p>
          )}

          {founder.cta && (
            <a className={styles.cta} href={founder.cta.href}>
              {founder.cta.label}
            </a>
          )}
        </aside>
      </div>
    </section>
  );
}
