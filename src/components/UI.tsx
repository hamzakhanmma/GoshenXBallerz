import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../lib/hooks";

/* ---------- Section heading with masked line reveals ---------- */

export function SectionHead({
  eyebrow,
  title,
  aside,
  light = false,
  titleMax,
  children,
}: {
  eyebrow: string;
  title: string[];
  aside?: string;
  light?: boolean;
  titleMax?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`section-head${light ? " on-light" : ""}`} data-reveal>
      <div className="section-head__title" style={titleMax ? { maxWidth: titleMax } : undefined}>
        <span className="eyebrow on-light-maybe">{eyebrow}</span>
        <h2 className="h2 section-head__h" style={{ marginTop: "1.1rem" }}>
          {title.map((line, i) => (
            <span className="line-mask" key={line} style={{ ["--d" as string]: `${i * 90}ms` }}>
              <span>{line}</span>
            </span>
          ))}
        </h2>
      </div>
      {(aside || children) && (
        <div className="section-head__aside">
          {aside && <p className={light ? "lead on-light" : "lead"}>{aside}</p>}
          {children}
        </div>
      )}
    </div>
  );
}

/* ---------- Eyebrow ---------- */

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`eyebrow${light ? " on-light" : ""}`}>{children}</span>;
}

/* ---------- Stat (uses counters only with verified numbers) ---------- */

export function Stat({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const { ref, value: shown } = useCountUp(value);
  return (
    <div className="stat" ref={ref as React.RefObject<HTMLDivElement>}>
      <span className="stat__value">
        {shown}
        {suffix && <em>{suffix}</em>}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

/* ---------- Tilt wrapper for cards ---------- */

export function Tilt({
  children,
  className = "",
  max = 6,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
        el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
        setStyle({
          transform: `perspective(1100px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`,
        });
      }}
      onPointerLeave={() => setStyle({ transform: "" })}
    >
      {children}
    </div>
  );
}

/* ---------- Lightbox ---------- */

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: { src: string; caption: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    document.body.classList.add("is-locked");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [index, items.length, onClose, onNavigate]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <button className="lb__close" onClick={onClose} aria-label="Close image viewer">
        <span />
        <span />
      </button>
      <div className="lb__inner" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} className="lb__img" />
        <div className="lb__bar">
          <span className="lb__caption">{item.caption}</span>
          <span className="lb__count">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      <button
        className="lb__nav lb__nav--prev"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
      >
        ←
      </button>
      <button
        className="lb__nav lb__nav--next"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
      >
        →
      </button>
    </div>
  );
}
