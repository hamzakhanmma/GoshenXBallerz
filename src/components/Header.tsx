import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav, site } from "../data/site";
import { Logo, ArrowIcon } from "./Logo";
import { useScrollY } from "../lib/hooks";

export function Header() {
  const scrollY = useScrollY();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const solid = scrollY > 40;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  useEffect(() => {
    if (open) {
      setHidden(false);
      return;
    }
    const delta = scrollY - lastY.current;
    if (scrollY > 220 && delta > 6) setHidden(true);
    else if (delta < -6) setHidden(false);
    lastY.current = scrollY;
  }, [scrollY, open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header
        className={`hdr${solid ? " is-solid" : ""}${hidden ? " is-hidden" : ""}${open ? " is-open" : ""}`}
      >
        <div className="hdr__inner">
          <Link to="/" className="hdr__brand" aria-label={`${site.name} home`}>
            <Logo size={46} />
          </Link>

          <nav className="hdr__nav" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `hdr__link${isActive ? " is-active" : ""}`}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="hdr__actions">
            <a className="hdr__phone" href={site.phoneHref} aria-label={`Call ${site.phone}`}>
              {site.phone}
            </a>
            <Link to="/contact" className="btn btn--lime btn--sm hdr__cta">
              <span>Book a Session</span>
              <span className="btn__arrow">
                <ArrowIcon />
              </span>
            </Link>
            <button
              className="burger"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mmenu${open ? " is-open" : ""}`} inert={!open}>
        <div className="mmenu__inner">
          <div className="mmenu__meta">
            <span className="eyebrow">Leicestershire, UK</span>
            <span className="mmenu__meta-sub">Youth Football Development</span>
          </div>
          <nav aria-label="Mobile">
            {nav.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className="mmenu__link"
                style={{ transitionDelay: `${120 + i * 55}ms` }}
              >
                <span className="mmenu__num">0{i + 1}</span>
                <span className="mmenu__label">{item.label}</span>
                <span className="mmenu__arrow">
                  <ArrowIcon />
                </span>
              </NavLink>
            ))}
          </nav>
          <div className="mmenu__foot">
            <Link to="/contact" className="btn btn--lime">
              <span>Book a Session</span>
              <span className="btn__arrow">
                <ArrowIcon />
              </span>
            </Link>
            <div className="mmenu__contact">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.facebook} target="_blank" rel="noreferrer noopener">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
