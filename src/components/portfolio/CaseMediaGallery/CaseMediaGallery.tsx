import type { MediaAsset } from "../../../data/caseStudies";
import styles from "./CaseMediaGallery.module.scss";

type CaseMediaGalleryProps = {
  gallery: MediaAsset[];
};

export function CaseMediaGallery({ gallery }: CaseMediaGalleryProps) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {gallery.map((asset) => {
            const orientationClass = asset.orientation ? styles[asset.orientation] : styles.landscape;
            
            return (
              <div key={asset.id} className={`${styles.mediaItem} ${orientationClass}`} data-reveal>
                {asset.type === "image" ? (
                  <img src={asset.src} alt={asset.alt || ""} className={styles.image} loading="lazy" />
                ) : (
                  <div className={styles.image} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--dark)', color: 'var(--white)' }}>
                    Video Player Placeholder
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
