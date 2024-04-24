"use client";

import { useEffect } from "react";
import useStore from "@/store/store";

function SmoothScrolling({ children }) {
  const setLocomotiveScroll = useStore((state) => state.setLocomotiveScroll);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setLocomotiveScroll(locomotiveScroll);
    })();
  }, []);
  return <>{children}</>;
}

// import { ReactLenis } from "@studio-freight/react-lenis";
// function SmoothScrolling({ children }) {
//   return <ReactLenis root>{children}</ReactLenis>;
// }

export default SmoothScrolling;
