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
          className={`min-h-screen bg-neutral-950 z-1100 fixed top-0 left-0 w-1/4 ${true}`}
        />
        <div
          id="banner-2"
          className={`min-h-screen bg-neutral-950 z-1100 fixed top-0 left-1/4 w-1/4 ${true}`}
        />
        {/* <svg
        width="140"
        height="140"
        viewBox="0 0 280 280"
        fill="none"
        className="svg-spin"
        style={{ visibility: "hidden" }}
      >
        <g>
          <line
            x1="59.9833"
            y1="140.333"
            x2="219.978"
            y2="139"
            stroke="#3498db" // Change color to a shade of blue
            strokeWidth="4"
          />
          <circle cx="60" cy="140" r="5" fill="#3498db" />
          <circle cx="220" cy="139" r="5" fill="#3498db" />
        </g>
        <path
          className="circle"
          d="M109.957 122.655L140 105.309L170.043 122.655V157.345L140 174.691L109.957 157.345V122.655Z"
          stroke="#3498db" // Change color to a shade of blue
          strokeWidth="4"
        />
        <circle
          className="circle"
          cx="140"
          cy="140"
          r="13"
          stroke="#f39c12" // Change color to a shade of orange
          strokeWidth="4"
        />
        <circle
          className="circle"
          cx="110"
          cy="192"
          r="13"
          stroke="#e74c3c" // Change color to a shade of red
          strokeWidth="4"
        />
        <circle
          className="circle circle_s"
          cx="85"
          cy="232"
          r="8"
          stroke="#27ae60" // Change color to a shade of green
          strokeWidth="4"
        />
        <circle
          className="circle"
          cx="170"
          cy="88"
          r="13"
          stroke="#27ae60" // Change color to a shade of green
          strokeWidth="4"
        />
        <circle
          className="circle circle_s"
          cx="110"
          cy="192"
          r="5"
          fill="#e74c3c" // Change color to a shade of red
        />
        <circle
          className="circle circle_s"
          cx="185"
          cy="61"
          r="5"
          fill="#f39c12" // Change color to a shade of orange
        />
      </svg> */}
        <div
          id="banner-3"
          className={`min-h-screen bg-neutral-950 z-1100 fixed top-0 left-2/4 w-1/4 ${true}`}
        />
        <div
          id="banner-4"
          className={`min-h-screen bg-neutral-950 z-1100 fixed top-0 left-3/4 w-1/4 ${true}`}
        />
      </div>

      <div className={firstLoad ? " " : "contents opacity-0"}>{children}</div>
    </div>
  );
}
