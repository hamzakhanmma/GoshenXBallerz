import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { img } from "../data/site";
import { ArrowIcon, Ball, PitchLines } from "./Logo";
import { prefersReducedMotion } from "../lib/hooks";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 90);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className={`hero${loaded ? " is-loaded" : ""}`}>
      <div className="hero__media">
        <div className="hero__image" style={{ backgroundImage: `url(${img.hero})` }} />
        <div className="hero__grain" />
        <div className="hero__scrim" />
        <div className="hero__glow" />
      </div>

      <PitchLines className="hero__pitch" />

      <div className="hero__float" aria-hidden="true">
        <Ball className="hero__ball hero__ball--1" />
        <Ball className="hero__ball hero__ball--2" />
        <span className="hero__ring" />
      </div>

      <div className="hero__inner wrap">
        <div className="hero__top">
          <span className="hero__loc">
            <span className="hero__pin" aria-hidden="true" />
            Leicestershire, UK
            <span className="hero__sep" aria-hidden="true">/</span>
            Youth Football Development
          </span>
          <span className="hero__est">Goshen XBallerz</span>
        </div>

        <div className="hero__copy">
          <h1 className="hero__title display">
            <span className="line-mask">
              <span style={{ ["--d" as string]: "260ms" }}>Develop</span>
            </span>
            <span className="line-mask">
              <span style={{ ["--d" as string]: "380ms" }}>Your Game.</span>
            </span>
            <span className="line-mask hero__title-2">
              <span style={{ ["--d" as string]: "520ms" }}>
                Define <em>Your Future.</em>
              </span>
            </span>
          </h1>

          <p className="hero__sub">
            More than football. Building confidence, developing ability and creating better players.
          </p>

          <div className="hero__actions">
            <Link to="/coaching" className="btn btn--lime">
              <span>Explore Our Coaching</span>
              <span className="btn__arrow">
                <ArrowIcon />
              </span>
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              <span>Start Your Journey</span>
              <span className="btn__arrow">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>

        <div className="hero__bottom">
          <a className="hero__scroll" href="#intro" aria-label="Scroll to introduction">
            <span className="hero__scroll-line">
              <span className="hero__scroll-dot" />
            </span>
            <span>Scroll to explore</span>
          </a>
          <div className="hero__badge">
            <span className="hero__badge-num">01</span>
            <span className="hero__badge-text">
              Team sessions
              <br />& 1-to-1 coaching
            </span>
          </div>
        </div>
      </div>

      {!prefersReducedMotion() && <span className="hero__beam" aria-hidden="true" />}
    </section>
  );
}
