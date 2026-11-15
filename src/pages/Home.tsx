import { Hero } from "../components/Hero";
import { Intro, Philosophy } from "../sections/IntroPhilosophy";
import { Programmes } from "../sections/Programmes";
import { Journey } from "../sections/Journey";
import { GalleryGrid } from "../sections/Gallery";
import { BigCTA } from "../sections/CTA";

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Philosophy />
      <Programmes />
      <Journey />
      <GalleryGrid limit={8} />
      <BigCTA />
    </>
  );
}
