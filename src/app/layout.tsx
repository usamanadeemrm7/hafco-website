import type { Metadata } from "next";
import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://www.hafcotrading.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HAFCO | International Food Import & Export Company",
    template: "%s | HAFCO",
  },
  description:
    "HAFCO is an international food import, export and distribution company supplying pulses, spices, fresh produce, dairy, meat and edible oils across Africa, the Middle East, Europe and Asia.",
  keywords: [
    "HAFCO",
    "food import export company",
    "Ghana food supplier",
    "international food trading",
    "pulses and grains supplier",
    "spices exporter",
    "edible oil supplier",
  ],
  openGraph: {
    title: "HAFCO | The Finest Taste Across Borders",
    description:
      "Trusted international supplier of premium food commodities, connecting businesses across Africa, the Middle East, Europe and Asia.",
    url: siteUrl,
    siteName: "HAFCO",
    images: [{ url: "/logo.png", width: 376, height: 192, alt: "HAFCO logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAFCO | The Finest Taste Across Borders",
    description:
      "International food import, export and distribution across Africa, the Middle East, Europe and Asia.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.fullName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "International food import, export and distribution company.",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressRegion: "Northern Region",
      addressCountry: "GH",
    },
    contactPoint: company.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "sales",
    })),
    sameAs: Object.values(company.social),
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${manrope.variable}`}>
      <body className="font-body bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand-red focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
