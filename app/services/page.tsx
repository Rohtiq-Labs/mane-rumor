import type { Metadata } from "next";
import type { ReactElement } from "react";
import { ServicesPageClient } from "@/components/ServicesPageClient";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ServicesCatalogue } from "@/components/sections/ServicesCatalogue";
import { ServicesHelpCta } from "@/components/sections/ServicesHelpCta";
import { ServicesHero } from "@/components/sections/ServicesHero";

export const metadata: Metadata = {
  title: "Services — Mane Rumor | Austin, Texas",
  description:
    "Browse luxury color, blonding, haircuts, hand-tied extensions, and Reiki services at Mane Rumor in Austin, Texas.",
};

const ServicesPage = (): ReactElement => {
  return (
    <ServicesPageClient>
      <Nav />
      <main>
        <ServicesHero />
        <ServicesCatalogue />
        <ServicesHelpCta />
      </main>
      <Footer />
    </ServicesPageClient>
  );
};

export default ServicesPage;
