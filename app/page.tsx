import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Capability } from "@/components/sections/capability";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capability />
      <Skills />
      <Experience />
      <FeaturedWork />
      <Services />
      <Contact />
    </>
  );
}
