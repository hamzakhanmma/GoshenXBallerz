import { Link } from "react-router-dom";
import { faqs, img, programmes } from "../data/site";
import { PageCTA, PageHero } from "../components/PageHero";
import { ArrowIcon } from "../components/Logo";
import { SectionHead } from "../components/UI";
import { useState } from "react";

const detail = {
  "team-training": {
    who: "Players who benefit from learning in a group — developing alongside others, competing, communicating and building confidence in a team environment.",
    involves: [
      "Structured sessions with a clear technical focus",
      "Ball mastery and technical repetition",
      "Small-sided games to apply what's been learned",
      "Guided feedback and decision-making challenges",
    ],
    develops: [
      "Technical ability under realistic pressure",
      "Understanding of space and movement",
      "Communication with teammates",
      "Confidence in competitive situations",
    ],
  },
  "one-to-one": {
    who: "Players who want focused attention on their own game — whether that's sharpening a strength, working through a specific technical issue, or building confidence.",
    involves: [
      "Individual assessment of current strengths and needs",
      "Session focus agreed around the player's development",
      "High repetition on the detail that matters most",
      "Technique tested under realistic pressure",
    ],
    develops: [
      "Cleaner, more reliable technique",
      "Better first touch and ball control",
      "Confidence to try things in matches",
      "Self-awareness of development areas",
    ],
  },
} as const;

export default function Coaching() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Coaching"
        title={["Two formats.", "One"]}
        accent="standard."
        intro="Whether a player thrives in a group or needs focused individual attention, the coaching principles stay the same: clear focus, quality repetition and genuine confidence building."
        image={img.team}
      />

      <section className="co-nav section--deep">
        <div className="wrap co-nav__inner">
          <Link to="/coaching#team-training" className="co-nav__item" data-reveal>
            <span className="co-nav__n">01</span>
            <span className="co-nav__t">Team Training</span>
            <span className="co-nav__d">Structured group sessions</span>
            <span className="co-nav__arrow">
              <ArrowIcon />
            </span>
          </Link>
          <Link to="/coaching#one-to-one" className="co-nav__item" data-reveal style={{ ["--d" as string]: "90ms" }}>
            <span className="co-nav__n">02</span>
            <span className="co-nav__t">1-to-1 Development</span>
            <span className="co-nav__d">Personalised individual coaching</span>
            <span className="co-nav__arrow">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </section>

      {programmes.map((p, idx) => {
        const d = detail[p.id as keyof typeof detail];
        return (
          <section
            key={p.id}
            id={p.id}
            className={`co-block section${idx % 2 === 0 ? "" : " section--light on-light"}`}
          >
            <div className="wrap">
              <div className="co-block__grid">
                <div className="co-block__media" data-reveal={idx % 2 === 0 ? "left" : "right"}>
                  <img src={p.image} alt="" loading="lazy" />
                  <span className="co-block__badge">{p.number}</span>
                </div>

                <div className="co-block__copy">
                  <div data-reveal>
                    <span className={`eyebrow${idx % 2 === 0 ? "" : " on-light"}`}>{p.tagline}</span>
                    <h2 className="h2 co-block__title">{p.title}</h2>
                    <p className="lead co-block__lead">{p.description}</p>
                  </div>

                  <div className="co-block__cols">
                    <div data-reveal style={{ ["--d" as string]: "80ms" }}>
                      <h3 className="co-block__h">What's involved</h3>
                      <ul className="co-list">
                        {d.involves.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                    <div data-reveal style={{ ["--d" as string]: "150ms" }}>
                      <h3 className="co-block__h">What players develop</h3>
                      <ul className="co-list">
                        {d.develops.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="co-block__who" data-reveal style={{ ["--d" as string]: "200ms" }}>
                    <span className="co-block__who-k">Who it suits</span>
                    <p>{d.who}</p>
                  </div>

                  <div className="co-block__actions" data-reveal style={{ ["--d" as string]: "250ms" }}>
                    <Link to={`/contact?format=${p.id}`} className={idx % 2 === 0 ? "btn btn--lime" : "btn btn--dark"}>
                      <span>Enquire About {p.title}</span>
                      <span className="btn__arrow">
                        <ArrowIcon />
                      </span>
                    </Link>
                    <Link to="/player-development" className="link-arrow">
                      How we develop players <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="co-faq section section--deep">
        <div className="wrap co-faq__grid">
          <div className="co-faq__head" data-reveal>
            <SectionHead eyebrow="Questions" title={["Good to", "know."]} />
            <p className="lead">
              If your question isn't here, send it through the enquiry form or give us a ring — we'll
              give you a straight answer.
            </p>
          </div>

          <div className="co-faq__list">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className={`faq${openFaq === i ? " is-open" : ""}`}
                data-reveal
                style={{ ["--d" as string]: `${i * 70}ms` }}
              >
                <button className="faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span>{f.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </button>
                <div className="faq__a">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
