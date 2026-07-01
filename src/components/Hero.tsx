"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { company } from "@/lib/data";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2400&auto=format&fit=crop",
    alt: "Shipping containers at an international port",
  },
  {
    src: "https://images.pexels.com/photos/32047262/pexels-photo-32047262.jpeg?auto=compress&cs=tinysrgb&w=2400",
    alt: "Aerial view of agricultural farmland",
  },
  {
    src: "https://images.pexels.com/photos/32542762/pexels-photo-32542762.jpeg?auto=compress&cs=tinysrgb&w=2400",
    alt: "Fresh produce ready for export",
  },
  {
    src: "https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg?auto=compress&cs=tinysrgb&w=2400",
    alt: "Warehouse logistics and distribution",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-brand-green-deep text-white">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[active].src}
              alt={slides[active].alt}
              fill
              priority={active === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep via-brand-green-deep/55 to-brand-green-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/25 via-transparent to-transparent mix-blend-multiply" />
      </div>

      {/* Signature route-line motif */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-70 lg:block"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M120 620 C 420 480, 620 700, 900 460 S 1250 220 1360 160"
          stroke="white"
          strokeWidth="1.5"
          className="route-line"
        />
        <circle cx="120" cy="620" r="5" fill="#E32227" />
        <circle cx="1360" cy="160" r="5" fill="#2F8F2F" />
      </svg>

      <div className="section relative w-full pb-20 pt-40">
        <div className="section-inner">
          <div className="flex flex-wrap items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-brand-red" : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>

          <p className="eyebrow mt-8 text-white/70">
            International Food Import &amp; Export
          </p>

          <h1 className="mt-4 max-w-3xl text-[3.4rem] font-bold leading-[1.02] sm:text-7xl lg:text-8xl">
            {company.name}
          </h1>

          <p className="mt-5 max-w-xl font-display text-2xl font-medium text-white/90 sm:text-3xl">
            {company.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
            {company.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/products" className="btn-primary">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost-light">
              Contact Us
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
