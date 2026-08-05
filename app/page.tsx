import type { ReactElement } from "react";
import { HomePageClient } from "@/components/HomePageClient";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { Stitch } from "@/components/layout/Stitch";
import { Arrival } from "@/components/sections/Arrival";
import { Artist } from "@/components/sections/Artist";
import { BookCta } from "@/components/sections/BookCta";
import { Expertise } from "@/components/sections/Expertise";
import { Gallery } from "@/components/sections/Gallery";
import { Journey } from "@/components/sections/Journey";
import { Philosophy } from "@/components/sections/Philosophy";
import { Proof } from "@/components/sections/Proof";

const Home = (): ReactElement => {
  return (
    <HomePageClient>
      <Nav />
      <main>
        <Arrival />
        <Philosophy />
        <Stitch />
        <Gallery />
        <Artist />
        <Stitch />
        <Journey />
        <Expertise />
        <Proof />
        <BookCta />
      </main>
      <Footer />
    </HomePageClient>
  );
};

export default Home;
