"use client";
import { cardo } from "@/libs/fonts";
import { TimelineItem } from "../ui";
import { useEffect, useState } from "react";

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0);

  /* 0. DATA */
  const Data = [
    {
      id: 0,
      title: "CAME TO LIFE!",
      year: "2002",
      image: "/images/new-born.jpg",
      description:
        'I was born on February 28, 2002 ( probably on a shiny morning ) in Morocco and I was named "Yassine El atlassi".',
    },
    {
      id: 1,
      title: "CHILDHOOD INTERESTS",
      year: "2008",
      image: "/images/kid-playing.jpg",
      description:
        "In my childhood, I was interested in that games that depend on problem-solving and fast thinking, I was in love with the feelings that come to you every time you solve a problem or you discover something new.",
    },
    {
      id: 2,
      title: "DISCOVERING COMPUTER",
      year: "2010",
      image: "/images/old-pc.jpg",
      description:
        "By this time I got my 1st pc interaction, going into this world of creations starting with games and ending in the wide world of the internet made me in love with this machine.",
    },
    {
      id: 3,
      title: "HIGH SCHOOL",
      year: "2016",
      image: "/images/books.jpg",
      description:
        "During these years of school, I fell in love with math and physics, because they had equation solving in them and I loved this aspect I was interested in structured solving, and at the same time I loved arts and design as well.",
    },
    {
      id: 4,
      title: "ACADEMIC BACKGROUND",
      year: "2019",
      image: "/images/dev-pc.jpg",
      description:
        "After all these years, all the interests and all the influence surely grow a big desire for programming so as my main path I chose to be a software engineer and also study design/ user experience.",
    },
    {
      id: 5,
      title: "TODAY",
      year: "2022",
      image: "/images/go-up.jpg",
      description:
        "Today, I am always trying to learn new things by searching and reading online courses, I always aim for the best technologies to get the best results. Pushing the barrier is always an option.",
    },
  ];
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
        setActiveItem(i);
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
        <h2 className={cardo.className + " timeline-header__title"}>
          My story
        </h2>
        <h3 className={" timeline-header__subtitle"}>FROM BORN TO NOW</h3>
      </div>
      <div className="timeline">
        {Data &&
          Data.map((timeline, index) => (
            <TimelineItem
              key={timeline.id}
              title={timeline.title}
              year={timeline.year}
              image={timeline.image}
              description={timeline.description}
              isActive={index === activeItem}
            />
          ))}
      </div>
    </section>
  );
}
