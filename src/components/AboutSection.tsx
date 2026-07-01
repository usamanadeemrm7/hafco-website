import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  "Direct sourcing relationships across key producing regions",
  "Quality inspection at every stage of the supply chain",
  "Export documentation and logistics handled end to end",
];

export default function AboutSection() {
  return (
    <section className="section py-24 lg:py-32">
      <div className="section-inner grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl3 shadow-card">
              <Image
                src="https://images.pexels.com/photo/two-men-inspecting-coffee-beans-at-farm-37306887/"
                alt="HAFCO team inspecting export-ready food commodities"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden w-52 rounded-xl2 border border-line bg-white p-5 shadow-lifted sm:block">
              <p className="font-display text-3xl font-bold text-brand-red">25+</p>
              <p className="mt-1 font-label text-xs font-medium uppercase tracking-wide text-ink/60">
                Countries served across four continents
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <p className="eyebrow">About HAFCO</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
            A dependable partner in international food trade
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            HAFCO connects producers and buyers across Africa, the Middle
            East, Europe and Asia, moving pulses, spices, fresh produce,
            dairy, meat and edible oils through a supply chain built on
            traceability and consistency. Every partnership starts with
            product quality and is sustained through reliable delivery.
          </p>

          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <span className="text-sm text-ink/75">{point}</span>
              </li>
            ))}
          </ul>

          <Link href="/about" className="btn-outline mt-9">
            Read More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
