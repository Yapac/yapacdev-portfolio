"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const Cursor = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    /* Cursor */

    setTimeout(() => {
      let hoverables = document.querySelectorAll(".hoverable");
      let hoverablesRect = document.querySelectorAll(".hoverable-rect");
      let hoverablesButton = document.querySelectorAll(".hoverable-button");

      /* HOVERTABLE */
      const handleMouseOver = (e) => {
        e.preventDefault();

        mountRef.current.classList.add("link-grow");
      };

      const handleMouseLeave = (e) => {
        e.preventDefault();

        mountRef.current.classList.remove("link-grow");
      };

      hoverables.forEach((hoverable) => {
        hoverable.addEventListener("mouseover", handleMouseOver);
        hoverable.addEventListener("mouseleave", handleMouseLeave);
      });

      /* HOVERTABLE RECT */
      hoverablesRect.forEach((hoverable) => {
        hoverable.addEventListener("mouseover", (e) => {
          e.preventDefault();
          mountRef.current.classList.add("link-grow-rect");
        });
        hoverable.addEventListener("mouseleave", (e) => {
          e.preventDefault();
          mountRef.current.classList.remove("link-grow-rect");
        });
      });

      /* HOVERTABLE TEXT BUTTON */
      hoverablesButton.forEach((hoverable) => {
        hoverable.addEventListener("mouseover", (e) => {
          e.preventDefault();
          mountRef.current.classList.add("link-grow-button");
        });
        hoverable.addEventListener("mouseleave", (e) => {
          e.preventDefault();
          mountRef.current.classList.remove("link-grow-button");
        });
      });
    }, 1750);

    const handleMouseMove = (e) => {
      gsap.to(mountRef.current, {
        top: e.clientY,
        left: e.clientX,
        ease: "expo.out",
      });
      // mountRef.current.style.top = e.clientY + "px";
      // mountRef.current.style.left = e.clientX + "px";
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
