"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumb: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[52vh] items-end overflow-hidden bg-brand-green-deep text-white"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-16">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep via-brand-green-deep/60 to-brand-green-deep/25" />
      </motion.div>

      <div className="section relative w-full pb-16 pt-32">
        <div className="section-inner">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-white/60"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/85">{breadcrumb}</span>
          </nav>

          <p className="eyebrow mt-6 text-white/70">{eyebrow}</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-white/75">{description}</p>
        </div>
      </div>
    </section>
  );
}
