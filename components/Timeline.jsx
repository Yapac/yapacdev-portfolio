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
      image: "/images/new-born.webp",
      description:
        'I was born on February 28, 2002, likely on a bright morning, in Morocco, and I was named "Yassine El atlassi".',
    },
    {
      id: 1,
      title: "CHILDHOOD INTERESTS",
      year: "2008",
      image: "/images/kid-playing.webp",
      description:
        "During my childhood, I was drawn to games that relied on problem-solving and quick thinking. I found immense joy in the rush of emotions that accompanied each problem solved or new discovery made.",
    },
    {
      id: 2,
      title: "DISCOVERING COMPUTER",
      year: "2010",
      image: "/images/old-pc.webp",
      description:
        "During this period, I had my first interaction with a PC. Immersing myself in the world of games and expanding into the vast realm of the internet, fueled my love for this machine.",
    },
    {
      id: 3,
      title: "HIGH SCHOOL",
      year: "2016",
      image: "/images/books.webp",
      description:
        "Throughout my school years, I developed a profound love for mathematics and physics. Their emphasis on equation solving deeply appealed to me. Simultaneously, I harbored a passion for the arts and design.",
    },
    {
      id: 4,
      title: "ACADEMIC BACKGROUND",
      year: "2019",
      image: "/images/dev-pc.webp",
      description:
        "After all these years, a strong desire for programming emerged. I chose to pursue a career as a software engineer while also focusing on the design and artistic side, blending my passions into a cohesive path.",
    },
    {
      id: 5,
      title: "TODAY",
      year: "2022",
      image: "/images/go-up.webp",
      description:
        "Today, I constantly seek to expand my knowledge by engaging in online courses and researching new topics. I strive to leverage the best technologies to achieve optimal results, and always pushing my boundaries.",
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
