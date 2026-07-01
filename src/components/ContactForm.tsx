"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success";

const fields = [
  { id: "fullName", label: "Full Name", type: "text", span: "half" },
  { id: "companyName", label: "Company Name", type: "text", span: "half" },
  { id: "email", label: "Email", type: "email", span: "half" },
  { id: "phone", label: "Phone", type: "tel", span: "half" },
  { id: "subject", label: "Subject", type: "text", span: "full" },
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    ["fullName", "email", "subject", "message"].forEach((key) => {
      const val = formData.get(key);
      if (!val || String(val).trim() === "") {
        nextErrors[key] = "This field is required.";
      }
    });

    const email = String(formData.get("email") || "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-center justify-center px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink/65">
          Thank you for reaching out. A member of our trade team will
          respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-7"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card-surface p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.id}
            className={field.span === "full" ? "sm:col-span-2" : ""}
          >
            <label
              htmlFor={field.id}
              className="font-label text-xs font-semibold uppercase tracking-wide text-ink/60"
            >
              {field.label}
              {["fullName", "email", "subject"].includes(field.id) && (
                <span className="text-brand-red"> *</span>
              )}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-red ${
                errors[field.id] ? "border-brand-red" : "border-line"
              }`}
            />
            {errors[field.id] && (
              <p className="mt-1.5 text-xs text-brand-red">
                {errors[field.id]}
              </p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="font-label text-xs font-semibold uppercase tracking-wide text-ink/60"
          >
            Message <span className="text-brand-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`mt-2 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-red ${
              errors.message ? "border-brand-red" : "border-line"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-brand-red">{errors.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-7 w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Submit"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
