import React from "react";
import "./skillshowcase.css";

export type SkillItem = {
  /** Display name under (or as alt for) the logo */
  name: string;
  /** Public URL to the logo image (png/svg/webp) */
  logo: string;
  /** Optional link to open when the logo is clicked */
  url?: string;
  /** Optional per-logo size (in px). Defaults to 56 on mobile / 64+ on desktop. */
  size?: number;
  /** Optional accessible label override */
  ariaLabel?: string;
};

export type SkillBucket = {
  /** Section title, e.g. "Web Stack" */
  title: string;
  /** Optional small label below title (e.g. "React, HTML, JS, CSS") */
  subtitle?: string;
  /** Optional emoji or text icon to show in the header */
  icon?: string;
  /** Items to render */
  items: SkillItem[];
};

export type SkillShowcaseProps = {
  /** Array of buckets to render */
  buckets: SkillBucket[];
  /** Accent color used for headers & accents (default: #25c2a0) */
  accentColor?: string;
  /** Cards per row at desktop (min 1, default 2) */
  columns?: number;
  /** Whether to show names under logos */
  showLabels?: boolean;
  /** Maximum card width (css length, default 680px) */
  maxCardWidth?: string;
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

/**
 * SkillShowcase
 * Renders responsive cards with floating logos inside.
 */
const SkillShowcase: React.FC<SkillShowcaseProps> = ({
  buckets,
  accentColor = "#25c2a0",
  columns = 3, // force 3 containers per row
  showLabels = false, // always hide labels
  maxCardWidth = "480px", // match CSS max-width
}) => {
  return (
    <section
      className="ss-container"
      style={{
        ["--ss-accent" as any]: accentColor,
        ["--ss-cols" as any]: columns,
      } as React.CSSProperties}
      aria-label="Skill showcase"
    >
      <div
        className="ss-grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(340px, 1fr))`,
          justifyContent: "center",
        }}
      >
        {buckets.map((bucket, bIdx) => (
          <article className="ss-card" key={bIdx}>
            <header className="ss-card__header" style={{ borderColor: accentColor }}>
              <div className="ss-card__pill" aria-hidden="true" />
              <h3 className="ss-card__title">
                {bucket.icon && <span className="ss-card__icon">{bucket.icon}</span>}
                {bucket.title}
              </h3>
              {bucket.subtitle && <p className="ss-card__subtitle">{bucket.subtitle}</p>}
            </header>
            <div className="ss-card__body ss-card__body--float">
              {bucket.items.map((item, iIdx) => {
                const duration = 6 + ((bIdx + iIdx) % 5);
                const delay = ((bIdx * 7 + iIdx * 3) % 6) - 3;
                const amp = 8 + ((bIdx + iIdx) % 8);
                const size = item.size ?? 64;
                const img = (
                  <img
                    className="ss-logo ss-logo--float"
                    src={item.logo}
                    alt={item.ariaLabel ?? item.name}
                    style={{
                      width: size,
                      height: size,
                      ["--ss-dur" as any]: `${duration}s`,
                      ["--ss-delay" as any]: `${delay}s`,
                      ["--ss-amp" as any]: `${amp}px`,
                    } as React.CSSProperties}
                    loading="lazy"
                    draggable={false}
                  />
                );
                return (
                  <div className="ss-logoWrap" key={iIdx} title={item.name}>
                    {item.url ? (
                      <a
                        className="ss-logoLink"
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={item.ariaLabel ?? item.name}
                      >
                        {img}
                      </a>
                    ) : (
                      img
                    )}
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillShowcase;