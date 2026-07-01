import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HAFCO for product availability, pricing and shipping timelines. Office in Tamale, Northern Region, Ghana.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's discuss your supply needs"
        description="Reach out for product availability, pricing and shipping timelines. Our trade team responds within one business day."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Cargo ship carrying containers across the ocean"
        breadcrumb="Contact"
      />

      <section className="section py-24 lg:py-32">
        <div className="section-inner grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal direction="left">
            <p className="eyebrow">Office</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Visit or reach us directly
            </h2>

            <div className="mt-8 space-y-5">
              <div className="card-surface flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-label text-xs font-semibold uppercase tracking-wide text-ink/50">
                    Address
                  </p>
                  <p className="mt-1 text-sm text-ink/75">
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                  </p>
                </div>
              </div>

              <div className="card-surface flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-label text-xs font-semibold uppercase tracking-wide text-ink/50">
                    Phone
                  </p>
                  {company.phones.map((phone) => (
                    <p key={phone} className="mt-1 text-sm text-ink/75">
                      <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-brand-red">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="card-surface flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-label text-xs font-semibold uppercase tracking-wide text-ink/50">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-ink/75">
                    <a href={`mailto:${company.email}`} className="hover:text-brand-red">
                      {company.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="card-surface flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-label text-xs font-semibold uppercase tracking-wide text-ink/50">
                    Business Hours
                  </p>
                  <p className="mt-1 text-sm text-ink/75">
                    Monday - Saturday, 8:00 AM - 6:00 PM (GMT)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl2 border border-line">
              <iframe
                title="HAFCO office location map"
                src="https://www.google.com/maps?q=Tamale%2C%20Northern%20Region%2C%20Ghana&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[15%]"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <p className="eyebrow">Send a Message</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Request a quote
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink/65">
              Share your product interest and volume, and we&apos;ll follow
              up with availability and pricing.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
