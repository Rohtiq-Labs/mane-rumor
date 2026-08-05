import type { Metadata } from "next";
import type { ReactElement } from "react";
import { ContactPageClient } from "@/components/ContactPageClient";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ContactBooking } from "@/components/sections/ContactBooking";
import { ContactHelp } from "@/components/sections/ContactHelp";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactVisit } from "@/components/sections/ContactVisit";

export const metadata: Metadata = {
  title: "Contact — Mane Rumor | Austin, Texas",
  description:
    "Visit Mane Rumor in Austin, Texas. Find our hours, location, and book a personalized consultation for luxury blondes, brunettes, and hand-tied extensions.",
};

const ContactPage = (): ReactElement => {
  return (
    <ContactPageClient>
      <Nav />
      <main>
        <ContactHero />
        <ContactVisit />
        <ContactBooking />
        <ContactHelp />
      </main>
      <Footer />
    </ContactPageClient>
  );
};

export default ContactPage;
