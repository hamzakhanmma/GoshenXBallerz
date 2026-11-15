import { PageHero } from "../components/PageHero";
import { site, img } from "../data/site";

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title={["Privacy"]}
        accent="policy."
        intro="How enquiry details are handled on this website, in plain language."
        image={img.night}
      />

      <section className="legal section">
        <div className="wrap legal__wrap">
          <p className="legal__updated">Last updated: November 2026</p>

          <div className="legal__block">
            <h2 className="h3 legal__h">Who this covers</h2>
            <p>
              This website is operated on behalf of Goshen XBallerz, a youth football coaching
              organisation based in Leicestershire, United Kingdom. This policy explains what happens
              to information submitted through this site.
            </p>
          </div>

          <div className="legal__block">
            <h2 className="h3 legal__h">What we collect</h2>
            <p>
              The enquiry form asks for a parent or guardian name, email address, contact number, the
              player's age, a preferred coaching format and an optional message. Only the details you
              choose to type in are collected.
            </p>
          </div>

          <div className="legal__block">
            <h2 className="h3 legal__h">How the form works right now</h2>
            <p>
              This website does not yet have a connected email service or database. When you submit the
              form, your details are validated in your browser and used to prepare a pre-filled email
              draft. Nothing is transmitted automatically, and no information is stored by this site.
            </p>
            <p>
              Once an email service is connected, this page will be updated to explain where the
              information is stored and how long it is kept.
            </p>
          </div>

          <div className="legal__block">
            <h2 className="h3 legal__h">How your details would be used</h2>
            <p>
              Enquiry details would be used only to respond to your query and discuss coaching
              options. They would not be sold or shared with third parties for marketing.
            </p>
          </div>

          <div className="legal__block">
            <h2 className="h3 legal__h">Children's information</h2>
            <p>
              Enquiries should be made by a parent, guardian or responsible adult. This website is not
              designed for children to submit their own details.
            </p>
          </div>

          <div className="legal__block">
            <h2 className="h3 legal__h">Your rights</h2>
            <p>
              Under UK data protection law you have the right to ask what information is held about you,
              to correct it, or to ask for it to be deleted. To make a request, call{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>

          <div className="legal__block">
            <h2 className="h3 legal__h">Photography credit</h2>
            <p>
              Images on this site are licensed stock photographs used as temporary placeholders. They
              do not depict Goshen XBallerz players, staff or facilities. Genuine organisation
              photography will replace them.
            </p>
          </div>

          <div className="legal__block">
            <h2 className="h3 legal__h">Contact</h2>
            <p>
              Goshen XBallerz, Leicestershire, United Kingdom. Telephone:{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
