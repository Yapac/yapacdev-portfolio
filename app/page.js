import {
  LoadingScreen,
  Hero,
  MainCanvas,
  UpperCanvas,
  About,
  Cursor,
} from "@/components";

import dynamic from "next/dynamic";

// Dynamically import the other components
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});
const Work = dynamic(() => import("@/components/Work"), {
  ssr: false,
});

export const metadata = {
  openGraph: {
    images: [
      {
        url: "https://yapacdev.com/opengraph-image.png",
        alt: "Opengraph image",
      },
    ],
  },
};
export default function Home() {
  return (
    <>
      <Cursor />

      <LoadingScreen />
      <MainCanvas />
      <UpperCanvas />
      <Hero />

      <About />
      <Skills />
      <Work />

      <Contact />
    </>
  );
}
