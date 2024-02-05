"use client";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    /* Cursor */
    setTimeout(() => {
      let hoverables = document.querySelectorAll(".hoverable");
      let hoverablesRect = document.querySelectorAll(".hoverable-rect");

      const handleMouseOver = () => {
        mountRef.current.classList.add("link-grow");
      };

      const handleMouseLeave = () => {
        mountRef.current.classList.remove("link-grow");
      };

      hoverables.forEach((hoverable) => {
        hoverable.addEventListener("mouseover", handleMouseOver);
        hoverable.addEventListener("mouseleave", handleMouseLeave);
      });

      hoverablesRect.forEach((hoverable) => {
        hoverable.addEventListener("mouseover", () => {
          mountRef.current.classList.add("link-grow-rect");
        });
        hoverable.addEventListener("mouseleave", () => {
          mountRef.current.classList.remove("link-grow-rect");
        });
      });
    }, 2000);

    const handleMouseMove = (e) => {
      mountRef.current.style.top = e.clientY + "px";
      mountRef.current.style.left = e.clientX + "px";
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once after the first render

  return <div className="cursor" ref={mountRef} />;
};

export default Cursor;
