import { Link } from "react-router-dom";
import { img, pillars, values } from "../data/site";
import { PageCTA, PageHero } from "../components/PageHero";
import { ArrowIcon, Ball } from "../components/Logo";
import { Eyebrow } from "../components/UI";
import { useParallax } from "../lib/hooks";

export default function About() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.09);

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={["More than", "learning to"]}
        accent="kick a ball."
        intro="Goshen XBallerz is a Leicestershire-based youth football coaching organisation built around one belief: developing a good footballer means developing the person too."
        image={img.about1}
      />

      <section className="ab-intro section">
        <div className="wrap ab-intro__grid">
          <div className="ab-intro__lead" data-reveal>
            <Eyebrow light>Who we are</Eyebrow>
            <h2 className="h2 ab-intro__title">
              Coaching that looks at the <span className="italic-accent">whole player.</span>
            </h2>
          </div>
          <div className="ab-intro__body" data-reveal style={{ ["--d" as string]: "140ms" }}>
            <p className="lead">
              We provide football coaching and individual player development for young footballers in
              and around Leicestershire — from grassroots players building the fundamentals to
              academy-level players looking for focused technical work.
            </p>
            <p className="ab-intro__p">
              Our sessions are built around the idea that technical ability alone isn't enough. A
              complete player also needs football intelligence, discipline, resilience and the
              confidence to express what they can do. That's what we coach towards — session by
              session, in a way that's structured but never cold.
            </p>
            <div className="ab-intro__sign">
              <Ball className="ab-intro__sign-ball" />
              <span>
                <em>Goshen XBallerz</em>
                <br />
                Youth football development, Leicestershire
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-media">
        <div className="ab-media__frame" ref={ref}>
          <img
            src={img.about2}
            alt="Young footballers training together on a grass pitch"
            loading="lazy"
            style={{ transform: `translate3d(0, ${offset * 0.18}px, 0) scale(1.06)` }}
          />
          <span className="ab-media__scrim" />
          <div className="ab-media__caption wrap">
            <span className="ab-media__tag">Placeholder photography</span>
            <p>
              Authentic Goshen XBallerz session photography will be added here — stock imagery is used
              temporarily and does not depict academy players.
            </p>
          </div>
        </div>
      </section>

      <section className="ab-approach section">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="section-head__title">
              <Eyebrow light>Our approach</Eyebrow>
              <h2 className="h2 section-head__h" style={{ marginTop: "1.1rem" }}>
                <span className="line-mask">
                  <span>Structured. Patient.</span>
                </span>
                <span className="line-mask">
                  <span style={{ ["--d" as string]: "90ms" }}>Built for progress.</span>
                </span>
              </h2>
            </div>
            <div className="section-head__aside">
              <p className="lead">
                Development isn't linear, and we don't coach as if it is. Sessions have a clear focus,
                measurable detail and room for players to make mistakes safely.
              </p>
            </div>
          </div>

          <ol className="ab-steps">
            {[
              {
                n: "01",
                t: "Understand the player",
                b: "Before we can develop anything, we look at where a player is now — strengths, habits and the areas that will make the biggest difference.",
              },
              {
                n: "02",
                t: "Build the fundamentals",
                b: "Ball mastery, first touch and control come first. Confidence on the ball is the platform everything else stands on.",
              },
              {
                n: "03",
                t: "Add the game",
                b: "Technique is tested in realistic situations so players learn to scan, decide and execute when it actually matters.",
              },
              {
                n: "04",
                t: "Develop the mentality",
                b: "We work on response to mistakes, ownership and standards — because those habits decide how far ability goes.",
              },
            ].map((s, i) => (
              <li key={s.n} className="ab-step" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className="ab-step__n">{s.n}</span>
                <h3 className="h3 ab-step__t">{s.t}</h3>
                <p className="ab-step__b">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ab-values section section--light on-light">
        <div className="wrap">
          <div className="section-head on-light" data-reveal>
            <div className="section-head__title">
              <Eyebrow light>What we believe in</Eyebrow>
              <h2 className="h2 section-head__h" style={{ marginTop: "1.1rem" }}>
                <span className="line-mask">
                  <span>Standards we</span>
                </span>
                <span className="line-mask">
                  <span style={{ ["--d" as string]: "90ms" }}>coach by.</span>
                </span>
              </h2>
            </div>
          </div>

          <div className="ab-values__grid">
            {values.map((v, i) => (
              <article key={v.title} className="vcard" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className="vcard__n">0{i + 1}</span>
                <h3 className="h3 vcard__title">{v.title}</h3>
                <p className="vcard__body">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-focus section section--deep">
        <div className="wrap ab-focus__grid">
          <div className="ab-focus__copy" data-reveal="left">
            <Eyebrow>On and off the pitch</Eyebrow>
            <h2 className="h2 ab-focus__title">The player behind the player.</h2>
            <p className="lead">
              Football gives young people a place to learn about effort, teamwork and handling things
              that don't go their way. We take that responsibility seriously — the coaching environment
              should be demanding and welcoming at the same time.
            </p>
            <ul className="ab-focus__list">
              <li>Respect for coaches, teammates and opponents</li>
              <li>Ownership of effort and attitude</li>
              <li>Confidence built through real progress</li>
              <li>Enjoyment — the reason players keep playing</li>
            </ul>
            <Link to="/player-development" className="link-arrow" style={{ marginTop: "1.6rem" }}>
              See the development pillars <ArrowIcon />
            </Link>
          </div>

          <div className="ab-focus__pillars" data-reveal="right">
            {pillars.map((p) => (
              <Link key={p.id} to="/player-development" className="ab-pillar">
                <span className="ab-pillar__n">{p.index}</span>
                <span className="ab-pillar__t">{p.title}</span>
                <span className="ab-pillar__arrow">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-team-note section">
        <div className="wrap ab-team-note__inner" data-reveal>
          <div className="ab-team-note__card">
            <span className="ab-team-note__tag">Team information</span>
            <h2 className="h3 ab-team-note__title">Coach profiles coming soon</h2>
            <p>
              We only publish staff biographies, qualifications and safeguarding details once they are
              verified. When that information is available it will be added here — we're not going to
              invent it in the meantime.
            </p>
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
