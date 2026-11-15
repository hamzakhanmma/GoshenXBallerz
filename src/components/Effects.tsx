import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/hooks";

/** Sparse desktop-only football cursor trail. One small ball per 90px of travel. */
export function CursorTrail() {
  const layer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover) and (min-width: 900px)").matches) return;
    const host = layer.current;
    if (!host) return;

    let last = { x: 0, y: 0 };
    let hasLast = false;
    let index = 0;

    const spawn = (x: number, y: number) => {
      const el = document.createElement("span");
      el.className = "trail-ball";
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
      el.style.setProperty("--r", `${(index++ % 2 ? 1 : -1) * (18 + Math.random() * 26)}deg`);
      el.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7.4 17 11l-1.9 5.4h-6.2L7 11z" fill="currentColor" opacity=".85"/></svg>';
      host.appendChild(el);
      window.setTimeout(() => el.remove(), 1150);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (!hasLast) {
        last = { x: e.clientX, y: e.clientY };
        hasLast = true;
        return;
      }
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      if (dx * dx + dy * dy < 90 * 90) return;
      last = { x: e.clientX, y: e.clientY };
      spawn(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div ref={layer} className="trail-layer" aria-hidden="true" />;
}

/** Slim lime reading-progress bar. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={bar} className="scroll-progress__bar" />
    </div>
  );
}
