import { Link } from "react-router-dom";
import { programmes } from "../data/site";
import { ArrowIcon } from "../components/Logo";
import { SectionHead } from "../components/UI";

export function Programmes() {
  return (
    <section className="prog section" id="programmes">
      <div className="wrap">
        <SectionHead
          eyebrow="Coaching programmes"
          title={["The right training.", "The right development."]}
          aside="Two formats, one purpose: giving each player the environment that moves them forward. Choose the setting that fits where they are now."
        />

        <div className="prog__list">
          {programmes.map((p, i) => (
            <article key={p.id} className="prog__card" data-reveal style={{ ["--d" as string]: `${i * 120}ms` }}>
              <Link to={p.href} className="prog__link" aria-label={`${p.cta} — ${p.title}`}>
                <div className="prog__media">
                  <img src={p.image} alt="" loading="lazy" />
                  <span className="prog__media-scrim" />
                  <span className="prog__number">{p.number}</span>
                </div>
                <div className="prog__content">
                  <span className="prog__tagline">{p.tagline}</span>
                  <h3 className="h3 prog__title">{p.title}</h3>
                  <p className="prog__desc">{p.description}</p>
                  <ul className="prog__features">
                    {p.features.map((f) => (
                      <li key={f}>
                        <span className="prog__tick" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="prog__cta">
                    {p.cta}
                    <span className="prog__cta-arrow">
                      <ArrowIcon />
                    </span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <p className="prog__note" data-reveal>
          Session times, availability and suitability are confirmed on enquiry.{" "}
          <Link to="/contact" className="prog__note-link">
            Get in touch
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
