import { Link } from "react-router-dom";
import { img, pillars } from "../data/site";
import { ArrowIcon, Ball } from "../components/Logo";
import { Eyebrow, SectionHead } from "../components/UI";
import { useParallax } from "../lib/hooks";

export function Intro() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.1);

  return (
    <section className="intro section" id="intro">
      <div className="wrap intro__grid">
        <div className="intro__media" data-reveal="left">
          <figure className="intro__figure">
            <div className="intro__img-wrap">
              <img
                ref={ref as React.RefObject<HTMLImageElement>}
                src={img.intro}
                alt="Young footballer in control of the ball during a coaching session"
                className="intro__img"
                style={{ transform: `translate3d(0, ${offset * 0.35}px, 0) scale(1.12)` }}
                loading="lazy"
                width={1500}
                height={1000}
              />
            </div>
            <figcaption className="intro__cap">
              <span className="intro__cap-dot" />
              Training ground detail — placeholder photography
            </figcaption>
          </figure>
          <div className="intro__chip" data-reveal style={{ ["--d" as string]: "220ms" }}>
            <Ball className="intro__chip-ball" />
            <span>
              Focused on the player
              <br />
              <em>not just the drill</em>
            </span>
          </div>
        </div>

        <div className="intro__copy">
          <div data-reveal>
            <Eyebrow>Our purpose</Eyebrow>
            <h2 className="h2 intro__title">
              Built on passion.
              <br />
              <span className="outline-type">Driven by development.</span>
            </h2>
          </div>

          <p className="lead intro__lead" data-reveal style={{ ["--d" as string]: "120ms" }}>
            At Goshen XBallerz, we believe every player has potential waiting to be unlocked. Through
            focused coaching, technical development and the right mindset, we help young footballers
            build the skills and confidence to take their game further.
          </p>

          <div className="intro__details" data-reveal style={{ ["--d" as string]: "200ms" }}>
            <div className="intro__detail">
              <span className="intro__detail-k">Who we coach</span>
              <span className="intro__detail-v">
                Young footballers from grassroots to academy level, across Leicestershire.
              </span>
            </div>
            <div className="intro__detail">
              <span className="intro__detail-k">How we coach</span>
              <span className="intro__detail-v">
                Technique, game intelligence and mindset developed together — not in isolation.
              </span>
            </div>
          </div>

          <div className="intro__foot" data-reveal style={{ ["--d" as string]: "260ms" }}>
            <Link to="/about" className="link-arrow">
              About Goshen XBallerz <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section className="phil section section--deep" id="philosophy">
      <div className="wrap">
        <SectionHead
          eyebrow="Our coaching philosophy"
          title={["Four pillars.", "One complete player."]}
          aside="Developing a good footballer takes more than learning to kick a ball. These are the four areas every session is built around."
        />

        <div className="phil__grid">
          {pillars.map((p, i) => (
            <article
              key={p.id}
              className="pcard"
              data-reveal
              style={{ ["--d" as string]: `${i * 110}ms`, ["--accent" as string]: p.accent }}
            >
              <div className="pcard__media">
                <img src={p.image} alt="" loading="lazy" />
                <span className="pcard__media-scrim" />
              </div>
              <div className="pcard__body">
                <div className="pcard__top">
                  <span className="pcard__index">{p.index}</span>
                  <span className="pcard__plus" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </div>
                <h3 className="h3 pcard__title">{p.title}</h3>
                <p className="pcard__short">{p.short}</p>
                <div className="pcard__reveal">
                  <ul className="pcard__list">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className="pcard__border" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="phil__foot" data-reveal>
          <p className="phil__note">
            Technical ability, confidence, football intelligence, discipline and the right mentality —
            developed together.
          </p>
          <Link to="/player-development" className="link-arrow">
            Explore player development <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
