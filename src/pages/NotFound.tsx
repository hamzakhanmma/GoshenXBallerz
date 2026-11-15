import { Link } from "react-router-dom";
import { ArrowIcon, Ball } from "../components/Logo";

export default function NotFound() {
  return (
    <section className="nf">
      <Ball className="nf__ball" />
      <div className="wrap nf__inner">
        <span className="eyebrow">Off the pitch</span>
        <h1 className="nf__code display">404</h1>
        <h2 className="h3 nf__title">That one went out of play.</h2>
        <p className="nf__text">
          The page you're looking for isn't here. Head back to the homepage and we'll get you back into
          the game.
        </p>
        <Link to="/" className="btn btn--lime">
          <span>Back to Home</span>
          <span className="btn__arrow">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </section>
  );
}
