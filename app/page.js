import {
  LoadingScreen,
  Hero,
  MainCanvas,
  UpperCanvas,
  About,
} from "@/components";

import dynamic from "next/dynamic";

// Dynamically import the other components
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});
const TimelineComponent = dynamic(
  () => import("@/components/TimelineComponent"),
  {
    ssr: false,
  }
);
const Work = dynamic(() => import("@/components/Work"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <MainCanvas />
      <UpperCanvas />
      <Hero />

      <About />
      {/* <TimelineComponent /> */}
      <Skills />
      <Work />

      <Contact />
    </>
  );
}
