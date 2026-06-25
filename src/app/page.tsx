import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { ServicesIndex } from "@/components/ServicesIndex";
import { SelectedWork } from "@/components/SelectedWork";
import { Studio } from "@/components/Studio";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <ServicesIndex />
      <SelectedWork />
      <Studio />
      <Contact />
    </main>
  );
}
