import Reveal from "./Reveal";
import { processSteps } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <section className="section bg-mist py-24 lg:py-32">
      <div className="section-inner">
        <Reveal className="max-w-xl">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
            Our process, from origin to delivery
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <div className="flex items-start gap-4 lg:flex-col lg:items-start lg:gap-0">
                <div className="flex flex-col items-center lg:w-full">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green-deep font-label text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 hidden h-px w-full flex-1 bg-line lg:block" />
                </div>
                <div className="lg:mt-5">
                  <h3 className="font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
