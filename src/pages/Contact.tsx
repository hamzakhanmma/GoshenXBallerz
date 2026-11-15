import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { img, site } from "../data/site";
import { PageHero } from "../components/PageHero";
import { ArrowIcon, Ball } from "../components/Logo";
import { Eyebrow } from "../components/UI";
import { motion, AnimatePresence } from "motion/react";

const schema = z.object({
  parentName: z.string().trim().min(2, "Please enter the parent or guardian's name."),
  email: z.string().trim().min(1, "Please enter an email address.").email("That email address doesn't look right."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a contact number we can reach you on.")
    .regex(/^[0-9+()\s-]{7,22}$/, "Please use digits, spaces and + only."),
  playerAge: z
    .string()
    .trim()
    .min(1, "Please tell us the player's age.")
    .refine((v) => !Number.isNaN(Number(v)) && Number(v) >= 4 && Number(v) <= 25, "Please enter an age between 4 and 25."),
  format: z.enum(["team-training", "one-to-one", "not-sure"], {
    message: "Please choose a coaching format.",
  }),
  message: z.string().trim().max(1200, "Please keep your message under 1200 characters.").optional(),
  consent: z.literal(true, { message: "Please confirm you're happy for us to respond to your enquiry." }),
});

type Field = keyof z.infer<typeof schema>;
type FormState = {
  parentName: string;
  email: string;
  phone: string;
  playerAge: string;
  format: string;
  message: string;
  consent: boolean;
};

const initial: FormState = {
  parentName: "",
  email: "",
  phone: "",
  playerAge: "",
  format: "",
  message: "",
  consent: false,
};

export default function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "error" | "prepared">("idle");
  const [mailto, setMailto] = useState("");

  useEffect(() => {
    const f = params.get("format");
    if (f === "team-training" || f === "one-to-one") {
      setForm((s) => ({ ...s, format: f }));
    }
  }, [params]);

  const set = <K extends Field>(key: K, value: FormState[K]) => {
    setForm((s) => ({ ...s, [key]: value }));
    if (touched[key]) validate({ ...form, [key]: value });
  };

  const validate = (data: FormState) => {
    const parsed = schema.safeParse(data);
    if (parsed.success) {
      setErrors({});
      return true;
    }
    const next: Partial<Record<Field, string>> = {};
    for (const issue of parsed.error.issues) {
      const k = issue.path[0] as Field;
      if (!next[k]) next[k] = issue.message;
    }
    setErrors(next);
    return false;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: Partial<Record<Field, boolean>> = {
      parentName: true,
      email: true,
      phone: true,
      playerAge: true,
      format: true,
      consent: true,
    };
    setTouched(allTouched);

    if (!validate(form)) {
      setStatus("error");
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      first?.focus?.();
      return;
    }

    const formatLabel =
      form.format === "team-training"
        ? "Team training"
        : form.format === "one-to-one"
          ? "1-to-1 development"
          : "Not sure yet";

    const body = [
      `Parent/guardian: ${form.parentName}`,
      `Email: ${form.email}`,
      `Contact number: ${form.phone}`,
      `Player's age: ${form.playerAge}`,
      `Preferred format: ${formatLabel}`,
      "",
      "Message:",
      form.message || "(none provided)",
      "",
      "— Sent from the Goshen XBallerz website enquiry form.",
    ].join("\n");

    setMailto(`mailto:${site.email}?subject=${encodeURIComponent(`Coaching enquiry — ${form.parentName}`)}&body=${encodeURIComponent(body)}`);
    setStatus("prepared");
  };

  const fieldError = (k: Field) => (errors[k] ? errors[k] : null);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={["Let's start", "the"]}
        accent="conversation."
        intro="Tell us a little about your player and which coaching format you're interested in. We'll come back to you with the right next step — no pressure, no hard sell."
        image={img.contact}
      />

      <section className="ct section">
        <div className="wrap ct__grid">
          <aside className="ct__aside">
            <div data-reveal>
              <Eyebrow light>Get in touch</Eyebrow>
              <h2 className="h3 ct__aside-title">Ways to reach us</h2>
            </div>

            <div className="ct__cards">
              <a href={site.phoneHref} className="ct__card" data-reveal style={{ ["--d" as string]: "60ms" }}>
                <span className="ct__card-k">Telephone</span>
                <span className="ct__card-v">{site.phone}</span>
                <span className="ct__card-arrow">
                  <ArrowIcon />
                </span>
              </a>

              <div className="ct__card ct__card--static" data-reveal style={{ ["--d" as string]: "110ms" }}>
                <span className="ct__card-k">Location</span>
                <span className="ct__card-v ct__card-v--sm">{site.location}</span>
                <span className="ct__card-note">Sessions have been hosted at {site.venue}.</span>
              </div>

              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="ct__card"
                data-reveal
                style={{ ["--d" as string]: "160ms" }}
              >
                <span className="ct__card-k">Facebook</span>
                <span className="ct__card-v ct__card-v--sm">Goshen XBallerz</span>
                <span className="ct__card-arrow">
                  <ArrowIcon />
                </span>
              </a>
            </div>

            <div className="ct__reassure" data-reveal style={{ ["--d" as string]: "200ms" }}>
              <Ball className="ct__reassure-ball" />
              <p>
                Enquiries are usually about finding the right fit. We'll ask about your player's age,
                current level and what you're hoping to improve before suggesting a session.
              </p>
            </div>
          </aside>

          <div className="ct__form-wrap" data-reveal="right">
            <AnimatePresence mode="wait">
              {status === "prepared" ? (
                <motion.div
                  key="success"
                  className="ct__success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="ct__success-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 12.5 9.5 18 20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h2 className="h3 ct__success-title">Your enquiry is ready to send</h2>
                  <p>
                    This site isn't connected to an email service yet, so your details haven't been sent
                    automatically. Use the button below to open the message in your email app — it's
                    already filled in with everything you entered.
                  </p>
                  <div className="ct__success-actions">
                    <a href={mailto} className="btn btn--lime">
                      <span>Open in Email App</span>
                      <span className="btn__arrow">
                        <ArrowIcon />
                      </span>
                    </a>
                    <a href={site.phoneHref} className="btn btn--ghost">
                      <span>Or Call {site.phone}</span>
                      <span className="btn__arrow">
                        <ArrowIcon />
                      </span>
                    </a>
                  </div>
                  <button
                    className="ct__again"
                    onClick={() => {
                      setStatus("idle");
                      setForm(initial);
                      setTouched({});
                      setErrors({});
                    }}
                  >
                    ← Edit my details
                  </button>
                  <p className="ct__success-note">
                    Once an email service is connected to this site, this step will submit instantly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="ctf"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="ctf__head">
                    <h2 className="h3 ctf__title">Enquiry form</h2>
                    <p className="ctf__sub">Fields marked * are required.</p>
                  </div>

                  {status === "error" && (
                    <div className="ctf__alert" role="alert">
                      <strong>Please check the highlighted fields.</strong>
                      <span>Some details are missing or need a small correction.</span>
                    </div>
                  )}

                  <div className="ctf__row">
                    <Field
                      label="Parent / guardian name"
                      name="parentName"
                      value={form.parentName}
                      onChange={(v) => set("parentName", v)}
                      onBlur={() => {
                        setTouched((t) => ({ ...t, parentName: true }));
                        validate(form);
                      }}
                      error={fieldError("parentName")}
                      autoComplete="name"
                      required
                    />
                    <Field
                      label="Email address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(v) => set("email", v)}
                      onBlur={() => {
                        setTouched((t) => ({ ...t, email: true }));
                        validate(form);
                      }}
                      error={fieldError("email")}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="ctf__row">
                    <Field
                      label="Contact number"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => set("phone", v)}
                      onBlur={() => {
                        setTouched((t) => ({ ...t, phone: true }));
                        validate(form);
                      }}
                      error={fieldError("phone")}
                      autoComplete="tel"
                      required
                    />
                    <Field
                      label="Player's age"
                      name="playerAge"
                      type="number"
                      value={form.playerAge}
                      onChange={(v) => set("playerAge", v)}
                      onBlur={() => {
                        setTouched((t) => ({ ...t, playerAge: true }));
                        validate(form);
                      }}
                      error={fieldError("playerAge")}
                      min={4}
                      max={25}
                      required
                    />
                  </div>

                  <div className="ctf__field" data-invalid={!!errors.format}>
                    <span className="ctf__label">
                      Preferred coaching format <em>*</em>
                    </span>
                    <div className="ctf__choices" role="radiogroup" aria-label="Preferred coaching format">
                      {[
                        { v: "team-training", l: "Team training" },
                        { v: "one-to-one", l: "1-to-1 development" },
                        { v: "not-sure", l: "Not sure yet" },
                      ].map((o) => (
                        <label
                          key={o.v}
                          className={`ctf__choice${form.format === o.v ? " is-checked" : ""}`}
                        >
                          <input
                            type="radio"
                            name="format"
                            value={o.v}
                            checked={form.format === o.v}
                            onChange={() => {
                              set("format", o.v);
                              setTouched((t) => ({ ...t, format: true }));
                              validate({ ...form, format: o.v });
                            }}
                          />
                          <span className="ctf__choice-dot" aria-hidden="true" />
                          <span>{o.l}</span>
                        </label>
                      ))}
                    </div>
                    {errors.format && <span className="ctf__error">{errors.format}</span>}
                  </div>

                  <div className="ctf__field">
                    <label className="ctf__label" htmlFor="message">
                      Additional message <span className="ctf__optional">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Anything you'd like us to know about your player, their current team or what they'd like to work on."
                      className="ctf__input ctf__input--area"
                    />
                    <span className="ctf__counter">{form.message.length} / 1200</span>
                  </div>

                  <label className={`ctf__consent${errors.consent ? " is-invalid" : ""}`} data-invalid={!!errors.consent}>
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => {
                        set("consent", e.target.checked);
                        setTouched((t) => ({ ...t, consent: true }));
                        validate({ ...form, consent: e.target.checked });
                      }}
                    />
                    <span className="ctf__check" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5 6.4 12 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>
                      I'm happy for Goshen XBallerz to use these details to respond to my enquiry, as
                      described in the <a href="/privacy">privacy policy</a>. *
                    </span>
                  </label>
                  {errors.consent && <span className="ctf__error">{errors.consent}</span>}

                  <div className="ctf__submit">
                    <button type="submit" className="btn btn--lime">
                      <span>Prepare My Enquiry</span>
                      <span className="btn__arrow">
                        <ArrowIcon />
                      </span>
                    </button>
                    <p className="ctf__disclaimer">
                      No payment or commitment. This form prepares an email — it does not send
                      automatically until an email service is connected.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  autoComplete,
  required,
  min,
  max,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error: string | null;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  min?: number;
  max?: number;
}) {
  return (
    <div className="ctf__field" data-invalid={!!error}>
      <label className="ctf__label" htmlFor={name}>
        {label} {required && <em>*</em>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        autoComplete={autoComplete}
        className={`ctf__input${error ? " is-invalid" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        min={min}
        max={max}
        inputMode={type === "tel" ? "tel" : type === "number" ? "numeric" : undefined}
      />
      {error && (
        <span className="ctf__error" id={`${name}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}
