import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { coreValues, aboutTimeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HAFCO's story, mission, vision and core values as an international food import, export and distribution company.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Trade built on trust and traceability"
        description="From regional sourcing to international distribution, HAFCO has grown by keeping quality and reliability at the center of every shipment."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Workers reviewing food export produce at a warehouse"
        breadcrumb="About"
      />

      <section className="section py-24 lg:py-32">
        <div className="section-inner grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl3 shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?q=80&w=1400&auto=format&fit=crop"
                alt="Export goods being prepared for international shipping"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <p className="eyebrow">Company Story</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
              Connecting producers and buyers across four continents
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              HAFCO was founded to close the gap between reliable food
              producers and the businesses that depend on them. Working
              from Ghana, we built sourcing relationships across pulses,
              spices, fresh produce, dairy, meat and edible oils, then
              paired that network with the logistics knowledge needed to
              move goods across borders without disruption.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Today, HAFCO supplies distributors, processors and retailers
              across Africa, the Middle East, Europe and Asia, with every
              relationship supported by consistent grading, documentation
              and delivery standards.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist py-24 lg:py-32">
        <div className="section-inner grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="card-surface h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                To supply premium, traceable food commodities to
                international markets through dependable sourcing and
                logistics.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-surface h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                To be a recognized name in international food trade,
                known for consistency, integrity and long-term
                partnerships.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="card-surface h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Our Commitment
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Every shipment is backed by quality checks, clear
                documentation and responsive communication with our
                partners.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section py-24 lg:py-32">
        <div className="section-inner">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Core Values</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
              What guides how we work
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="card-surface h-full p-7">
                  <h3 className="font-display text-lg font-semibold text-brand-red">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist py-24 lg:py-32">
        <div className="section-inner">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Our Journey</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
              Growing our reach, one partnership at a time
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-line sm:left-1/2" />
            <div className="space-y-12">
              {aboutTimeline.map((item, i) => (
                <Reveal
                  key={item.title}
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0
                      ? "sm:items-end sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:items-start sm:pl-12 sm:text-left"
                  }`}
                >
                  <span
                    className={`absolute left-[9px] top-1 h-3.5 w-3.5 rounded-full border-2 border-brand-red bg-white sm:left-auto ${
                      i % 2 === 0 ? "sm:right-[-7px]" : "sm:left-[-7px]"
                    }`}
                  />
                  <div className="card-surface w-full p-6">
                    <p className="eyebrow">{item.year}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
