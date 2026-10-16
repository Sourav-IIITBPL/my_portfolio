import { Hero } from "@/components/home/Hero";
import { Proof } from "@/components/home/Proof";
import { Philosophy } from "@/components/home/Philosophy";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Experience } from "@/components/home/Experience";
import { AiNative } from "@/components/home/AiNative";
import { SecurityResearch } from "@/components/home/SecurityResearch";
import { Skills } from "@/components/home/Skills";
import { Education } from "@/components/home/Education";
import { Achievements } from "@/components/home/Achievements";
import { Certificates } from "@/components/home/Certificates";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Philosophy />
      <FeaturedProjects />
      <Experience />
      <AiNative />
      <SecurityResearch />
      <Skills />
      <Education />
      <Achievements />
      <Certificates />
      <Contact />
    </>
  );
}
