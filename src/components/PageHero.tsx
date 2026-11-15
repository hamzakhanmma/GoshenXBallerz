import { Link } from "react-router-dom";
import { ArrowIcon } from "./Logo";
import { PitchLines } from "./Logo";

export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  image,
  align = "left",
}: {
  eyebrow: string;
  title: string[];
  accent?: string;
  intro: string;
  image: string;
  align?: "left" | "center";
}) {
  return (
    <section className={`phero${align === "center" ? " phero--center" : ""}`}>
      <div className="phero__media">
        <div className="phero__img" style={{ backgroundImage: `url(${image})` }} />
        <span className="phero__scrim" />
      </div>
      <PitchLines className="phero__pitch" />
      <div className="wrap phero__inner">
        <span className="phero__eyebrow eyebrow fade-in">{eyebrow}</span>
        <h1 className="phero__title display">
          {title.map((line, i) => (
            <span className="line-mask" key={line}>
              <span style={{ ["--d" as string]: `${180 + i * 110}ms` }}>{line}</span>
            </span>
          ))}
          {accent && (
            <span className="line-mask">
              <span className="phero__accent" style={{ ["--d" as string]: `${180 + title.length * 110}ms` }}>
                {accent}
              </span>
            </span>
          )}
        </h1>
        <p className="phero__intro fade-in" style={{ animationDelay: "0.6s" }}>
          {intro}
        </p>
        <div className="phero__crumb fade-in" style={{ animationDelay: "0.75s" }}>
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </div>
      </div>
    </section>
  );
}

export function PageCTA() {
  return (
    <section className="pcta">
      <div className="wrap pcta__inner">
        <div>
          <span className="eyebrow">Next step</span>
          <h2 className="h2 pcta__title">Let's talk about your player.</h2>
        </div>
        <div className="pcta__actions">
          <Link to="/contact" className="btn btn--lime">
            <span>Start Your Journey</span>
            <span className="btn__arrow">
              <ArrowIcon />
            </span>
          </Link>
          <Link to="/coaching" className="btn btn--ghost">
            <span>View Coaching</span>
            <span className="btn__arrow">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
