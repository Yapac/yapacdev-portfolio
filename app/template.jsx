"use client";

import { animatePageIn } from "@/libs/pageAnimation";
import useStore, { getFirstLoad } from "@/store/store";
import { useEffect } from "react";

export default function Template({ children }) {
  const firstLoad = useStore(getFirstLoad);

  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div className={firstLoad ? " " : "hidden"}>
        <div
          id="banner-1"
          className={`min-h-screen bg-neutral-950 z-1100 fixed  w-full ${true}`}
        ></div>
      </div>

      <div className={firstLoad ? " " : "contents opacity-0"}>{children}</div>
    </div>
  );
}
