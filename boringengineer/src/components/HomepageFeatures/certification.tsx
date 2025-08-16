import React, { useEffect, useMemo, useRef, useState } from "react";
import "./certifications.css";

export type TickerItem = { text: string; href: string };

export type TickerMarqueeProps = {
  items: TickerItem[];
  /** Pixels per second. Default: 80 */
  speedPxPerSec?: number;
  /** Gap between items, in px. Default: 48 */
  gapPx?: number;
  /** Pause the animation when hovering/focusing. Default: true */
  pauseOnHover?: boolean;
  /** Optional aria-label for the whole ticker */
  ariaLabel?: string;
  /** Optional className to style the outer container */
  className?: string;
};

const TickerMarquee: React.FC<TickerMarqueeProps> = ({
  items,
  speedPxPerSec = 80,
  gapPx = 48,
  pauseOnHover = true,
  ariaLabel = "Scrolling ticker",
  className = "",
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number>(15);
  const [isPaused, setPaused] = useState(false);

  // Duplicate items for seamless looping
  const doubled = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const measure = () => {
      if (!contentRef.current || speedPxPerSec <= 0) return;
      const width = contentRef.current.getBoundingClientRect().width / 2; // single set width
      const d = Math.max(6, width / speedPxPerSec);
      setDuration(d);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, [speedPxPerSec, items.length]);

  return (
    <div
      className={`ticker ${className}`}
      aria-label={ariaLabel}
      data-paused={isPaused}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div ref={trackRef} className="ticker__track" role="region" aria-roledescription="marquee">
        <div
          ref={contentRef}
          className="ticker__content"
          style={{
            // Pass dynamic values as CSS custom properties
            ["--gap" as any]: `${gapPx}px`,
            ["--duration" as any]: `${duration}s`,
          }}
        >
          {doubled.map((item, i) => (
            <a
              key={`${item.href}-${i}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ticker__item"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerMarquee;

// Example usage:
// import "./ticker-marquee.css";
// <TickerMarquee
//   items={[
//     { text: "Soliton wins design award", href: "https://example.com/1" },
//     { text: "New TestStand release", href: "https://example.com/2" },
//     { text: "Case study: throughput x3", href: "https://example.com/3" },
//   ]}
//   speedPxPerSec={90}
//   gapPx={56}
// />
