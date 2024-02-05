import {
  LoadingScreen,
  MainCanvas,
  Contact,
  Hero,
  Skills,
  Timeline,
  Work,
} from "@/components";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <MainCanvas />

      <Hero />

      <Timeline />
      <Skills />
      <Work />

      <Contact />
    </>
  );
}
