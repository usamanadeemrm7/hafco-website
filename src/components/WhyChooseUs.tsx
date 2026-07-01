import {
  Award,
  Truck,
  Globe2,
  ShieldCheck,
  BadgePercent,
  Handshake,
  LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { whyChooseUs } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Award,
  Truck,
  Globe2,
  ShieldCheck,
  BadgePercent,
  Handshake,
};

export default function WhyChooseUs() {
  return (
    <section className="section py-24 lg:py-32">
      <div className="section-inner">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Why HAFCO</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
            Built for partners who need certainty
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="card-surface h-full p-7 hover:-translate-y-1.5 hover:shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
