import { Link } from "react-router-dom";
import { img, site } from "../data/site";
import { ArrowIcon, Ball } from "../components/Logo";
import { useParallax } from "../lib/hooks";

export function BigCTA() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.14);

  return (
    <section className="cta" ref={ref}>
      <div className="cta__media">
        <div
          className="cta__img"
          style={{ backgroundImage: `url(${img.cta})`, transform: `translate3d(0,${offset * 0.5}px,0) scale(1.14)` }}
        />
        <span className="cta__scrim" />
      </div>
      <Ball className="cta__ball" />

      <div className="wrap cta__inner">
        <span className="eyebrow cta__eyebrow" data-reveal>
          Ready when you are
        </span>
        <h2 className="cta__title display" data-reveal style={{ ["--d" as string]: "80ms" }}>
          <span className="line-mask">
            <span>Your journey starts</span>
          </span>
          <span className="line-mask">
            <span style={{ ["--d" as string]: "120ms" }}>with one touch.</span>
          </span>
        </h2>
        <p className="cta__sub" data-reveal style={{ ["--d" as string]: "180ms" }}>
          Ready to take your football development further? Get in touch with Goshen XBallerz and discover
          the right coaching opportunity.
        </p>
        <div className="cta__actions" data-reveal style={{ ["--d" as string]: "240ms" }}>
          <Link to="/contact" className="btn btn--lime">
            <span>Get Started</span>
            <span className="btn__arrow">
              <ArrowIcon />
            </span>
          </Link>
          <a href={site.phoneHref} className="cta__phone">
            <span className="cta__phone-label">Or call</span>
            <span className="cta__phone-num">{site.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
