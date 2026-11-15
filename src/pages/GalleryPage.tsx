import { img } from "../data/site";
import { PageCTA, PageHero } from "../components/PageHero";
import { GalleryGrid } from "../sections/Gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={["Training.", "Moments."]}
        accent="Progress."
        intro="Close control in tight spaces, the repetition that builds technique, and the moments that make the work worthwhile. Filter by category or open any image."
        image={img.about2}
      />

      <GalleryGrid filterable showHead={false} />

      <section className="gal-video section section--deep">
        <div className="wrap gal-video__inner" data-reveal>
          <div className="gal-video__copy">
            <span className="eyebrow">Video</span>
            <h2 className="h3 gal-video__title">Session footage to follow</h2>
            <p>
              We'll feature genuine Goshen XBallerz training and match footage here once it's available
              and cleared for use. Until then, this space stays reserved rather than filled with
              unrelated clips.
            </p>
          </div>
          <div className="gal-video__frame" aria-hidden="true">
            <div className="gal-video__placeholder">
              <span className="gal-video__play">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
              <span className="gal-video__label">Footage coming soon</span>
            </div>
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
