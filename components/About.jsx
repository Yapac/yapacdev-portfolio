"use client";
import TransitionLink from "@/ui/TransitionLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const textWrapperRef = useRef(null);
  const socialContainerRef = useRef(null);

  const infiniteTextRef = useRef(null);
  let xPercent = 0;
  let direction = -1;

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    /* TITLE */
    const titleText = new SplitType(textWrapperRef.current.children[1], {
      types: "chars, words",
    });

    gsap.from(titleText.chars, {
      opacity: 0.1,
      y: -5,

      stagger: 0.1,
      scrollTrigger: {
        trigger: textWrapperRef.current.children[1],
        start: "top 80%",
        end: "-10% 20%",
        scrub: true,
      },
    });

    /* PARAGRAPH */
    const paragraphText = new SplitType(textWrapperRef.current.children[2], {
      types: "chars, words",
    });

    gsap.from(paragraphText.chars, {
      opacity: 0.75,
      yPercent: 100,

      stagger: 0.002,
      scrollTrigger: {
        trigger: textWrapperRef.current.children[2],
        toggleActions: "play paused play reverse",
        start: "top 80%",
        end: "-10% 20%",
      },
    });
    /* BUTTON */
    gsap.from(textWrapperRef.current.children[3], {
      opacity: 0,
      duration: 0.5,
      yPercent: 100,

      scrollTrigger: {
        trigger: textWrapperRef.current.children[3],
        toggleActions: "play paused play reverse",
        start: "top 80%",
        end: "-10% 20%",
      },
    });
    /* FIND ME */
    gsap.from(socialContainerRef.current, {
      opacity: 0,
      duration: 0.5,
      yPercent: 50,

      scrollTrigger: {
        trigger: socialContainerRef.current,
        toggleActions: "play paused play reverse",
        start: "top 90%",
        end: "-10% 20%",
      },
    });
    /* INFINITE BANNER */
    gsap.to(infiniteTextRef.current, {
      scrollTrigger: {
        trigger: "#about",
        scrub: 0.25,
        start: 0,
        end: "200%",
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-750px",
    });
    requestAnimationFrame(infiniteText_animation);
  });
  const infiniteText_animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    if (infiniteTextRef.current) {
      gsap.set(infiniteTextRef.current.children[0], { xPercent: xPercent });
      gsap.set(infiniteTextRef.current.children[1], { xPercent: xPercent });
    }

    requestAnimationFrame(infiniteText_animation);
    xPercent += 0.1 * direction;
  };

  return (
    <section className="about-container nav-highlight container" id="about">
      <div className="about-wrapper">
        <div className="about-grid">
          <div className="about-grid-item hoverable-rect">
            <div className="item-icon">
              <Image
                src="/icons/web.png"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 75vw"
                alt="Picture of website"
                loading="lazy"
                placeholder="empty"
                style={{ objectFit: "cover" }}
              />
            </div>
            <span></span>

            <h4>High-end Websites</h4>
            <p>
              Powerful websites, with high performances and slick interactivity
            </p>
          </div>
          <div className="about-grid-item hoverable-rect">
            <div className="item-icon">
              <Image
                src="/icons/mobile.png"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 75vw"
                alt="Mobile app"
                loading="lazy"
                placeholder="empty"
                style={{ objectFit: "cover" }}
              />
            </div>
            <span></span>

            <h4>Phone Aplications</h4>
            <p>
              Professional Full-stack phone applications that works across
              platforms
            </p>
          </div>
          <div className="about-grid-item hoverable-rect">
            <div className="item-icon">
              <Image
                src="/icons/solve.png"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 75vw"
                alt="Problem solving ilustration"
                loading="lazy"
                placeholder="empty"
                style={{ objectFit: "cover" }}
              />
            </div>
            <span></span>

            <h4>Problem solving</h4>
            <p>High Problem solving skills, to always deliver and ennovate</p>
          </div>
          <div className="about-grid-item hoverable-rect">
            <div className="item-icon">
              <Image
                src="/icons/design.png"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 75vw"
                alt="Design board"
                loading="lazy"
                placeholder="empty"
                style={{ objectFit: "cover" }}
              />
            </div>
            <span></span>

            <h4>Skilled Design</h4>
            <p>
              Strong design and UX skills, and always up to push the creativity
              bounderies
            </p>
          </div>
        </div>
        <div className="about-content">
          <div className="" ref={textWrapperRef}>
            <div className="sm_header mb-4">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="white"></circle>
              </svg>
              <h3>WHAT DO I OFFER </h3>
            </div>
            <h2>
              In nutshell <br />
              what i can bring to the table
            </h2>

            <p className="doda">
              Hi there! I'm <strong>Yassine El Atlassi</strong>, your go-to web
              and mobile app maestro! <br /> I create{" "}
              <strong>powerful websites and apps</strong> that are solid in both
              the front and back-end. I'm here to bring your digital ideas to
              life.
            </p>

            <TransitionLink className="explore hoverable" href="/about">
              Complete bio<span className="icon-right"></span>
              <span className="icon-right after"></span>
            </TransitionLink>
          </div>
          <div className="social-container" ref={socialContainerRef}>
            <h4>Find me:</h4>
            <div className="codrops-top">
              <a
                className="codrops-icon hoverable"
                href="https://www.instagram.com/yapacdev/"
                target="_blank"
                aria-label="Yapacdev's instagram account"
              >
                <div className="icon-inner md hydrated">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon s-ion-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                  </svg>
                </div>
                <span>Find me on instagram!</span>
              </a>
              <a
                className="codrops-icon hoverable"
                href="https://wa.me/212656034248?text=Heey%2CIm+from+the+website%21"
                target="_blank"
                aria-label="Yapacdev's whatsapp number"
              >
                <div className="icon-inner  md hydrated">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon s-ion-icon"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span>Let's build something incredible together!</span>
              </a>
              <a
                className="codrops-icon hoverable"
                href="https://www.linkedin.com/in/yapacdev/"
                target="_blank"
                aria-label="Yapacdev's linkedin account"
              >
                <div className="icon-inner md hydrated">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon s-ion-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                  </svg>
                </div>
                <span>Check out my linkedIn!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="infinite-text-spacer" />
      <div className="infinite-text">
        <section ref={infiniteTextRef}>
          <p>
            Crafting with Precision
            <span>
              <Image
                src="/icons/t-purple.png"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 40vw"
                alt="purple triangle icon"
                loading="lazy"
                placeholder="empty"
              />
            </span>
            Crafting with Precision
            <span>
              <Image
                src="/icons/t-purple.png"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 40vw"
                alt="purple triangle icon"
                loading="lazy"
                placeholder="empty"
              />
            </span>
          </p>
          <p>
            Crafting with Precision
            <span>
              <Image
                src="/icons/t-purple.png"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 40vw"
                alt="purple triangle icon"
                loading="lazy"
                placeholder="empty"
              />
            </span>
            Crafting with Precision
            <span>
              <Image
                src="/icons/t-purple.png"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 40vw"
                alt="purple triangle icon"
                loading="lazy"
                placeholder="empty"
              />
            </span>
          </p>
        </section>
      </div>
    </section>
  );
}
