import type { Metadata } from "next";
import type { ReactElement } from "react";
import { AboutPageClient } from "@/components/AboutPageClient";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { AboutCta } from "@/components/sections/AboutCta";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutPhilosophy } from "@/components/sections/AboutPhilosophy";
import { AboutTeam } from "@/components/sections/AboutTeam";

export const metadata: Metadata = {
  title: "About — Mane Rumor | Austin, Texas",
  description:
    "Meet the Mane Rumor team. A Latina-owned Austin atelier devoted to healthy hair, luxury blondes, dimensional brunettes, and hand-tied extensions.",
};

const AboutPage = (): ReactElement => {
  return (
    <AboutPageClient>
      <Nav />
      <main>
        <AboutHero />
        <AboutPhilosophy />
        <AboutTeam />
        <AboutCta />
      </main>
      <Footer />
    </AboutPageClient>
  );
};

export default AboutPage;
