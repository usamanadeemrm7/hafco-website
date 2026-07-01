import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { company, navLinks, productCategories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-green-deep text-white">
      <div className="section py-16">
        <div className="section-inner grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <span className="inline-block rounded-2xl bg-white/95 p-3">
              <Logo />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {company.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={company.social.facebook}
                aria-label="HAFCO on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-red hover:bg-brand-red"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={company.social.instagram}
                aria-label="HAFCO on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-red hover:bg-brand-red"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={company.social.linkedin}
                aria-label="HAFCO on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-red hover:bg-brand-red"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-label text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-label text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Products
            </h3>
            <ul className="mt-5 space-y-3">
              {productCategories.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products#${p.slug}`}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-label text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </span>
              </li>
              {company.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-brand-red" />
                  <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-red" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section py-6">
          <div className="section-inner flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
            <p>© {new Date().getFullYear()} HAFCO. All rights reserved.</p>
            <p>International Food Import, Export & Distribution</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
