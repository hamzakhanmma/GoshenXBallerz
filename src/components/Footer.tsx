import { Link } from "react-router-dom";
import { nav, site } from "../data/site";
import { Logo, ArrowIcon, Ball } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="ftr__marquee" aria-hidden="true">
        <div className="ftr__marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="ftr__marquee-inner">
              <span>Develop Your Game</span>
              <Ball className="ftr__marquee-ball" />
              <span className="outline-type">Define Your Future</span>
              <Ball className="ftr__marquee-ball" />
            </span>
          ))}
        </div>
      </div>

      <div className="wrap ftr__main">
        <div className="ftr__brand">
          <Link to="/" aria-label={`${site.name} home`}>
            <Logo size={62} />
          </Link>
          <p className="ftr__desc">
            Youth football coaching and individual player development in Leicestershire. Building
            technical ability, game intelligence and confidence in young footballers.
          </p>
          <a className="btn btn--ghost btn--sm ftr__cta" href={site.phoneHref}>
            <span>{site.phone}</span>
            <span className="btn__arrow">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="ftr__col">
          <h3 className="ftr__title">Explore</h3>
          <ul className="ftr__list">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr__col">
          <h3 className="ftr__title">Coaching</h3>
          <ul className="ftr__list">
            <li>
              <Link to="/coaching#team-training">Team Training</Link>
            </li>
            <li>
              <Link to="/coaching#one-to-one">1-to-1 Development</Link>
            </li>
            <li>
              <Link to="/player-development">Player Development</Link>
            </li>
            <li>
              <Link to="/contact">Enquire</Link>
            </li>
          </ul>
        </div>

        <div className="ftr__col">
          <h3 className="ftr__title">Find Us</h3>
          <ul className="ftr__list">
            <li className="ftr__static">{site.location}</li>
            <li className="ftr__static ftr__venue">Sessions hosted at {site.venue}</li>
            <li>
              <a href={site.facebook} target="_blank" rel="noreferrer noopener">
                Facebook ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap ftr__bottom">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="ftr__legal">
          <Link to="/privacy">Privacy Policy</Link>
          <span className="ftr__dot" aria-hidden="true" />
          <span>Leicestershire, UK</span>
        </div>
      </div>
    </footer>
  );
}
