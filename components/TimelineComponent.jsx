"use client";
import { useEffect } from "react";
import Timeline from "@/ui/Timeline";
import useStore from "@/store/store";

export default function TimelineComponent() {
  /* 0. DATA */
  const setActiveTimeline = useStore((state) => state.setActiveTimeline); // Getting setActiveTimeline method from the store

  const handleScroll = () => {
    const items = document.querySelectorAll(".timeline-item");

    const scrollPosition = window.scrollY;

    items.forEach((item, i) => {
      const rect = item.getBoundingClientRect();
      const min = rect.top + window.scrollY - 200;
      const max = rect.bottom + window.scrollY;

      if (
        (i === items.length - 2 &&
          scrollPosition > min + item.offsetHeight / 2) ||
        (scrollPosition <= max - 40 && scrollPosition >= min)
      ) {
        setActiveTimeline(i);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean Up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="timeline-container" id="about">
      <div className="timeline-header">
        <h2 className={" timeline-header__title"}>Biography</h2>
        <h3 className={" timeline-header__subtitle"}>FROM BORN TO NOW</h3>
      </div>
      <div className="timeline">
        <Timeline />
      </div>
    </section>
  );
}
