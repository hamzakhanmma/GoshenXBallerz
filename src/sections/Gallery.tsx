import { useState } from "react";
import { Link } from "react-router-dom";
import { gallery, galleryCats } from "../data/site";
import { ArrowIcon } from "../components/Logo";
import { Lightbox, SectionHead } from "../components/UI";

export function GalleryGrid({
  filterable = false,
  limit,
  showHead = true,
  showFoot = true,
}: {
  filterable?: boolean;
  limit?: number;
  showHead?: boolean;
  showFoot?: boolean;
}) {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const source = filterable && cat !== "All" ? gallery.filter((g) => g.cat === cat) : gallery;
  const items = limit ? source.slice(0, limit) : source;

  return (
    <section className="gal section" id="gallery">
      <div className="wrap">
        {showHead && (
          <SectionHead
            eyebrow="Football gallery"
            title={["On the grass.", "In the moment."]}
            aside="A look at the kind of work that goes into development — touches, repetition, teamwork and the moments in between."
          />
        )}

        {filterable && (
          <div className="gal__filters" role="tablist" aria-label="Filter gallery" data-reveal>
            {galleryCats.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                className={`gal__filter${cat === c ? " is-active" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="gal__grid">
          {items.map((g, i) => (
            <button
              key={g.src}
              className={`gal__item gal__item--${(i % 7) + 1}`}
              onClick={() => setOpen(i)}
              data-reveal
              style={{ ["--d" as string]: `${(i % 4) * 80}ms` }}
              aria-label={`View image: ${g.caption}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
              <span className="gal__scrim" />
              <span className="gal__meta">
                <span className="gal__caption">{g.caption}</span>
                <span className="gal__cat">{g.cat}</span>
              </span>
              <span className="gal__zoom" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {showFoot && (
          <div className="gal__foot" data-reveal>
            <p className="gal__note">
              Photography shown is licensed stock imagery used as a temporary placeholder. Official
              Goshen XBallerz session photography will replace these images.
            </p>
            <Link to="/gallery" className="link-arrow">
              View full gallery <ArrowIcon />
            </Link>
          </div>
        )}
      </div>

      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
    </section>
  );
}
