import {
  LoadingScreen,
  // Contact,
  Hero,
  MainCanvas,
  // Skills,
  // Timeline,
  // Work,
} from "@/components";

import dynamic from "next/dynamic";

// Dynamically import the other components
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});
const Timeline = dynamic(() => import("@/components/Timeline"), {
  ssr: false,
});
const Work = dynamic(() => import("@/components/Work"), {
  ssr: false,
});

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
