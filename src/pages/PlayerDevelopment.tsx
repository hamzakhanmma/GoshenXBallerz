import { useState } from "react";
import { development, img } from "../data/site";
import { PageCTA, PageHero } from "../components/PageHero";
import { Ball, PitchLines } from "../components/Logo";
import { Eyebrow } from "../components/UI";
import { useSectionProgress } from "../lib/hooks";

export default function PlayerDevelopment() {
  const [active, setActive] = useState(0);
  const current = development[active];
  const { ref, progress } = useSectionProgress<HTMLDivElement>();

  return (
    <>
      <PageHero
        eyebrow="Player Development"
        title={["Develop the", "complete"]}
        accent="footballer."
        intro="Technical ability, game intelligence and mindset are not separate projects. They're developed together — which is why our coaching is built around four connected pillars."
        image={img.dev}
      />

      <section className="pd-map">
        <div className="pd-map__bg">
          <PitchLines className="pd-map__pitch" />
        </div>
        <div className="wrap pd-map__inner" ref={ref}>
          <div className="pd-map__head" data-reveal>
            <Eyebrow>The development model</Eyebrow>
            <h2 className="h2 pd-map__title">
              Four pillars.
              <br />
              <span className="italic-accent">One player.</span>
            </h2>
            <p className="lead">
              Each pillar reinforces the others. Strong technique gives a player the tools; game
              intelligence tells them when to use them; mindset decides whether they trust themselves
              to try.
            </p>
          </div>

          <div className="pd-wheel" data-reveal style={{ ["--p" as string]: progress }}>
            <svg className="pd-wheel__rings" viewBox="0 0 400 400" aria-hidden="true">
              <circle cx="200" cy="200" r="186" className="pd-ring pd-ring--1" />
              <circle cx="200" cy="200" r="140" className="pd-ring pd-ring--2" />
              <circle cx="200" cy="200" r="94" className="pd-ring pd-ring--3" />
              <circle cx="200" cy="200" r="186" className="pd-ring pd-ring--progress" />
            </svg>

            <div className="pd-wheel__core">
              <Ball className="pd-wheel__ball" />
              <span className="pd-wheel__core-label">
                Complete
                <br />
                Player
              </span>
            </div>

            {development.map((d, i) => {
              const angle = (i / development.length) * Math.PI * 2 - Math.PI / 2;
              const r = 43;
              return (
                <button
                  key={d.id}
                  className={`pd-node${active === i ? " is-active" : ""}`}
                  style={{
                    left: `${50 + Math.cos(angle) * r}%`,
                    top: `${50 + Math.sin(angle) * r}%`,
                  }}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <span className="pd-node__n">{d.number}</span>
                  <span className="pd-node__t">{d.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pd-detail section section--deep">
        <div className="wrap pd-detail__grid">
          <div className="pd-detail__panel" key={current.id}>
            <span className="pd-detail__n">{current.number}</span>
            <h2 className="h2 pd-detail__title">{current.title}</h2>
            <p className="pd-detail__intro">{current.intro}</p>
            <p className="pd-detail__body">{current.body}</p>
            <div className="pd-detail__drill">
              <span className="pd-detail__drill-tag">Coaching focus</span>
              <span>{current.drill}</span>
            </div>
          </div>

          <div className="pd-detail__skills">
            <h3 className="pd-detail__skills-h">What we work on</h3>
            <ul>
              {current.skills.map((s, i) => (
                <li key={s} style={{ ["--i" as string]: i }}>
                  <span className="pd-skill__idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pd-skill__name">{s}</span>
                  <span className="pd-skill__bar">
                    <span style={{ width: `${58 + ((i * 13) % 38)}%` }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pd-compare section">
        <div className="wrap">
          <div className="pd-compare__head" data-reveal>
            <Eyebrow light>Why it matters</Eyebrow>
            <h2 className="h2 pd-compare__title">
              A player with tools
              <br />
              versus a player who can <span className="italic-accent">use them.</span>
            </h2>
          </div>

          <div className="pd-compare__grid">
            <div className="pd-compare__col" data-reveal="left">
              <h3 className="pd-compare__h pd-compare__h--muted">Skills in isolation</h3>
              <ul>
                <li>Can complete a drill when unopposed</li>
                <li>Technique drops under pressure</li>
                <li>Needs instructions before every action</li>
                <li>Confidence depends on things going well</li>
              </ul>
            </div>
            <div className="pd-compare__col pd-compare__col--hl" data-reveal="right">
              <h3 className="pd-compare__h">Skills in the game</h3>
              <ul>
                <li>Executes technique at speed and under pressure</li>
                <li>Scans and recognises the picture early</li>
                <li>Makes decisions independently</li>
                <li>Keeps competing after a mistake</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
