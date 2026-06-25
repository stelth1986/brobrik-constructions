import type { Metadata } from "next";
import { Montserrat, Michroma } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Montserrat — brand body + heading face.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Michroma — wide technical face used as the Eurostile Extended substitute
// for the logo wordmark and blueprint-style labels.
const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brobrik.com.au"),
  title: {
    default: "Brobrik Constructions · Built around the way you live, Sydney",
    template: "%s · Brobrik Constructions",
  },
  description:
    "A Sydney building company run by the Englezos family since 1994. New builds, extensions, renovations and remedial works across residential and commercial. Built square, built once.",
  openGraph: {
    title: "Brobrik Constructions",
    description:
      "Built around the way you live. A Sydney building company run by the Englezos family since 1994.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${montserrat.variable} ${michroma.variable} h-full`}
    >
      <body className="min-h-full">
        <MotionProvider>
          <Nav />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
