import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { productCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore HAFCO's product categories: pulses and grains, spices and nuts, fruits and vegetables, dairy and meat, and edible oil and fat.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="A trading portfolio built for global buyers"
        description="Five core categories, each sourced, graded and packaged to meet the requirements of international markets."
        image="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Assorted food commodities ready for export"
        breadcrumb="Products"
      />

      <nav
        aria-label="Product categories"
        className="sticky top-20 z-30 border-b border-line bg-white/95 backdrop-blur-md"
      >
        <div className="section">
          <div className="section-inner scrollbar-hide flex gap-6 overflow-x-auto py-4">
            {productCategories.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="shrink-0 font-label text-sm font-medium text-ink/65 transition-colors hover:text-brand-red"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {productCategories.map((product, i) => (
        <section
          key={product.slug}
          id={product.slug}
          className={`section scroll-mt-40 py-24 lg:py-28 ${
            i % 2 === 1 ? "bg-mist" : ""
          }`}
        >
          <div className="section-inner grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal
              direction={i % 2 === 0 ? "left" : "right"}
              className={i % 2 === 1 ? "lg:order-2" : ""}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl3 shadow-card">
                <Image
                  src={product.bannerImage}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
            </Reveal>

            <Reveal
              direction={i % 2 === 0 ? "right" : "left"}
              delay={0.1}
              className={i % 2 === 1 ? "lg:order-1" : ""}
            >
              <p className="eyebrow">Category {String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                {product.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {product.description}
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-label text-xs font-semibold uppercase tracking-wide text-ink/50">
                    Applications
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {product.applications.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-ink/70">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-label text-xs font-semibold uppercase tracking-wide text-ink/50">
                    Benefits
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-ink/70">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link href="/contact" className="btn-primary mt-9">
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <CTA />
    </>
  );
}
