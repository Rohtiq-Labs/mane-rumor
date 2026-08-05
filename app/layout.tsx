import type { Metadata } from "next";
import { Archivo, Fraunces, Inter } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleContext";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Mane Rumor — Austin, Texas",
  description:
    "Luxury hair color, hand-tied extensions, and healthy-hair transformations in Austin, Texas.",
};

const RootLayout = ({
  children,
}: LayoutProps<"/">): React.ReactElement => {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans overflow-x-hidden">
        <LocaleProvider defaultLocale="en">{children}</LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
