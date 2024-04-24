"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Hero() {
  const homeRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".title-anim", {
      duration: 1,
      delay: 3,
      opacity: 0,
      y: 300,
      stagger: 0.15,
      ease: "power3.out",
      scale: 1.2,
    });
    gsap.to(homeRef.current, {
      scale: 0.9,
      y: 100,
      opacity: 0.5,
      duration: 3,
      delay: 0,
      scrollTrigger: {
        trigger: "#about",
        start: "top 100%",
        end: "top 0%",
        pin: homeRef.current,
        pinSpacing: false,
        scrub: 1,
      },
    });
  });

  return (
    <section id="home" ref={homeRef} className="nav-highlight">
      <div className="container holder-hero">
        <div className="hero-gif">
          <Image
            className="img"
            src="/gif/hero.gif"
            fill
            unoptimized
            alt="Hero gif"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="titleWrapper">
          <h2 className="">
            <div className="title-word">
              <span className="title-anim">Transforming</span>
            </div>
            <br />
            <div className="pe-8 title-word">
              <span className="title-anim">ideas</span>
            </div>
          </h2>
          <h2 className="relative">
            <div className="ps-2 title-word">
              <span className="title-anim">into</span>
            </div>
            <br />
            <div className="title-word">
              <div className="title-label">DIGITAL</div>
              <span className="title-anim">Masterpieces</span>
            </div>
          </h2>
        </div>
        <p className="landing-paragraph">
          "Crafting Digital Experiences: Tech mastery, <br />
          Problem Solving, and Creative Web Solutions"
        </p>
      </div>
      <a
        className="scroll-downs hoverable"
        href="#about"
        aria-label="Learn more about Yapacdev's story"
      >
        <div className="scroller"></div>
      </a>
    </section>
  );
}
