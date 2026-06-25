"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { services, contact } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  project: "",
  message: "",
};

const projectOptions = [...services.map((s) => s.title), "General enquiry"];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ tone = "navy" }: { tone?: "navy" | "paper" }) {
  const dark = tone === "navy";
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please add your name.";
    if (!fields.email.trim()) next.email = "Please add an email.";
    else if (!emailRe.test(fields.email)) next.email = "That email looks off.";
    if (!fields.message.trim()) next.message = "Tell us a little about the job.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Website enquiry${fields.project ? ` · ${fields.project}` : ""} · ${fields.name}`;
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.phone ? `Phone: ${fields.phone}` : null,
      fields.project ? `Project: ${fields.project}` : null,
      "",
      fields.message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const text = dark ? "text-paper" : "text-ink";
  const labelClass = dark ? "text-paper/50" : "text-ink/50";
  const optionBg = dark ? "bg-navy" : "bg-paper";
  const fieldClass = `w-full border-0 border-b bg-transparent py-3 transition-colors duration-300 focus:border-orange focus:outline-none ${
    dark
      ? "border-paper/25 text-paper placeholder-paper/40"
      : "border-line-strong text-ink placeholder-ink/40"
  }`;

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="thanks"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex h-full flex-col justify-center border p-8 ${
            dark ? "border-paper/15" : "border-line"
          }`}
        >
          <p className="titleblock text-orange">Thank you</p>
          <p className={`mt-4 font-display text-2xl leading-snug ${text}`}>
            Your enquiry is on its way. We&rsquo;ll be in touch shortly.
          </p>
          <p className={`mt-4 text-sm leading-relaxed ${dark ? "text-paper/60" : "text-ink/60"}`}>
            If your email client didn&rsquo;t open, reach us directly at{" "}
            <a href={contact.emailHref} className={`${text} underline hover:text-orange`}>
              {contact.email}
            </a>
            .
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          noValidate
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-7"
        >
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <Field label="Name" error={errors.name} htmlFor="cf-name" labelClass={labelClass}>
              <input
                id="cf-name"
                type="text"
                autoComplete="name"
                value={fields.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
                placeholder="Your name"
                className={fieldClass}
              />
            </Field>

            <Field label="Email" error={errors.email} htmlFor="cf-email" labelClass={labelClass}>
              <input
                id="cf-email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
                placeholder="you@email.com"
                className={fieldClass}
              />
            </Field>

            <Field label="Phone (optional)" htmlFor="cf-phone" labelClass={labelClass}>
              <input
                id="cf-phone"
                type="tel"
                autoComplete="tel"
                value={fields.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(02) 0000 0000"
                className={fieldClass}
              />
            </Field>

            <Field label="Project" htmlFor="cf-project" labelClass={labelClass}>
              <select
                id="cf-project"
                value={fields.project}
                onChange={(e) => update("project", e.target.value)}
                className={`${fieldClass} cursor-pointer appearance-none`}
              >
                <option value="" className={optionBg}>
                  Select a service
                </option>
                {projectOptions.map((p) => (
                  <option key={p} value={p} className={optionBg}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field
            label="What do you want built?"
            error={errors.message}
            htmlFor="cf-message"
            labelClass={labelClass}
          >
            <textarea
              id="cf-message"
              rows={4}
              value={fields.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
              placeholder="A second storey, a bathroom, a leaking balcony…"
              className={`${fieldClass} resize-none`}
            />
          </Field>

          <button
            type="submit"
            className={`group mt-2 inline-flex w-fit cursor-pointer items-center gap-4 border px-7 py-4 transition-colors duration-300 hover:border-orange ${
              dark ? "border-paper/30" : "border-line-strong"
            }`}
          >
            <span className={`font-display text-xl transition-colors group-hover:text-orange md:text-2xl ${text}`}>
              Send enquiry
            </span>
            <span
              aria-hidden
              className="text-orange transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  labelClass,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  labelClass: string;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className={`titleblock mb-1 ${labelClass}`}>
        {label}
      </label>
      {children}
      {error ? <span className="mt-2 text-xs text-orange">{error}</span> : null}
    </div>
  );
}
