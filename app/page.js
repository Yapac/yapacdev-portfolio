import {
  LoadingScreen,
  Contact,
  Hero,
  Skills,
  Timeline,
  Work,
} from "@/components";

import dynamic from "next/dynamic";

const MainCanvas = dynamic(() => import("@/components/MainCanvas"), {
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
