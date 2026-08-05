import type { Metadata } from "next";
import type { ReactElement } from "react";
import { TransformationsPageClient } from "@/components/TransformationsPageClient";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { FeaturedTransformations } from "@/components/sections/FeaturedTransformations";
import { ResultsStatements } from "@/components/sections/ResultsStatements";
import { TransformationsCta } from "@/components/sections/TransformationsCta";
import { TransformationsHero } from "@/components/sections/TransformationsHero";

export const metadata: Metadata = {
  title: "Transformations — Mane Rumor | Austin, Texas",
  description:
    "Real client transformations in luxury blondes, dimensional brunettes, hand-tied extensions, and curly hair at Mane Rumor in Austin, Texas.",
};

const TransformationsPage = (): ReactElement => {
  return (
    <TransformationsPageClient>
      <Nav />
      <main>
        <TransformationsHero />
        <FeaturedTransformations />
        <ResultsStatements />
        <TransformationsCta />
      </main>
      <Footer />
    </TransformationsPageClient>
  );
};

export default TransformationsPage;
