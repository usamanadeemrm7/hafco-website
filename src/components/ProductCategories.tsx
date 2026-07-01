import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { productCategories } from "@/lib/data";

export default function ProductCategories() {
  return (
    <section className="section bg-mist py-24 lg:py-32">
      <div className="section-inner">
        <Reveal className="max-w-xl">
          <p className="eyebrow">What We Trade</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
            Product categories built for global demand
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            Five core categories, each sourced, inspected and packaged to
            meet the requirements of international buyers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08}>
              <Link
                href={`/products#${product.slug}`}
                className="card-surface group flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-lifted"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/50 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold">
                    {product.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                    {product.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-label text-sm font-semibold text-brand-red">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={productCategories.length * 0.08}>
            <Link
              href="/products"
              className="flex h-full min-h-[19rem] flex-col items-start justify-center rounded-xl2 bg-brand-green-deep p-8 text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lifted"
            >
              <p className="font-display text-2xl font-semibold leading-snug">
                View the full product catalog
              </p>
              <p className="mt-3 text-sm text-white/70">
                Specifications, applications and benefits for every category.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-label text-sm font-semibold text-white">
                Browse All Products
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
