import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Brobrik Constructions. Call (02) 9584 3999 or send us the details.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact"
        subtitle="New build, extension, renovation or a building that needs putting right. Start the conversation."
        image="/media/hero-still.jpg"
        imageAlt="A Brobrik-built contemporary home at dusk."
      />
      <Contact tone="paper" />
    </main>
  );
}
