import { journey } from "../data/site";
import { Ball, PitchLines } from "../components/Logo";
import { useSectionProgress } from "../lib/hooks";

export function Journey() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const ballPos = Math.min(0.94, Math.max(0.06, (progress - 0.14) / 0.66));

  return (
    <section className="journey" id="journey">
      <div className="journey__bg">
        <PitchLines className="journey__pitch" />
      </div>

      <div className="wrap journey__head" data-reveal>
        <span className="eyebrow">Player development journey</span>
        <h2 className="h2 journey__title">
          From first touch
          <br />
          to <span className="italic-accent">complete player.</span>
        </h2>
        <p className="lead journey__lead">
          Development is a path, not a switch. Our coaching builds stage by stage — each one adding a
          layer to the player underneath.
        </p>
      </div>

      <div className="wrap journey__body" ref={ref}>
        <div className="journey__track" aria-hidden="true">
          <span className="journey__track-line" />
          <span className="journey__track-fill" style={{ transform: `scaleY(${progress})` }} />
          <span className="journey__track-ball" style={{ top: `${ballPos * 100}%` }}>
            <Ball />
          </span>
        </div>

        <ol className="journey__stages">
          {journey.map((s, i) => (
            <li className="jstage" key={s.step} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <div className="jstage__marker">
                <span className="jstage__num">{s.step}</span>
              </div>
              <div className="jstage__content">
                <h3 className="h3 jstage__title">{s.title}</h3>
                <p className="jstage__body">{s.body}</p>
              </div>
              <span className="jstage__ghost" aria-hidden="true">
                {s.step}
              </span>
            </li>
          ))}
        </ol>

        <div className="journey__finish" data-reveal>
          <span className="journey__finish-tag">The goal</span>
          <p>
            A player who is technically capable, thinks clearly, competes with confidence — and enjoys
            the game more because of it.
          </p>
        </div>
      </div>
    </section>
  );
}
