import { Hero } from "@/components/home/Hero";
import { Proof } from "@/components/home/Proof";
import { Philosophy } from "@/components/home/Philosophy";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AiNative } from "@/components/home/AiNative";
import { SecurityResearch } from "@/components/home/SecurityResearch";
import { Experience } from "@/components/home/Experience";
import { Skills } from "@/components/home/Skills";
import { Achievements } from "@/components/home/Achievements";
import { Certificates } from "@/components/home/Certificates";
import { SystemMap } from "@/components/home/SystemMap";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Philosophy />
      <FeaturedProjects />
      <AiNative />
      <SecurityResearch />
      <Experience />
      <Skills />
      <Achievements />
      <Certificates />
      <SystemMap />
      <Contact />
    </>
  );
}
