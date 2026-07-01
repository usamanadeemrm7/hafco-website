import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "International Food Import & Export Company",
  description:
    "HAFCO supplies pulses, spices, fresh produce, dairy, meat and edible oils to businesses across Africa, the Middle East, Europe and Asia.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductCategories />
      <WhyChooseUs />
      <ProcessTimeline />
      <Stats />
      <CTA />
    </>
  );
}
