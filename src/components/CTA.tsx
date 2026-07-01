import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { company } from "@/lib/data";

export default function CTA() {
  return (
    <section className="section py-20 lg:py-28">
      <div className="section-inner">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl3 bg-brand-red px-8 py-16 text-center text-white sm:px-16 lg:py-20">
            <div className="absolute inset-0 -z-10">
              <Image
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2000&auto=format&fit=crop"
                alt=""
                fill
                className="object-cover opacity-15"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark" />
            </div>

            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Looking for a Reliable Global Food Supplier?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-white/85">
              Tell us what you need and our trade team will respond with
              product availability, pricing and shipping timelines.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn bg-white text-brand-red hover:-translate-y-0.5 hover:shadow-lifted"
              >
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${company.phones[0].replace(/\s+/g, "")}`}
                className="btn-ghost-light"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
