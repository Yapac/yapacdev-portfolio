"use client";
import useStore, { getCanvasLoaded, getLocomotiveScroll } from "@/store/store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HomeNavigation = () => {
  const [activeSection, setActiveSection] = useState(null);
  const isCanvasLoaded = useStore(getCanvasLoaded);
  const setLocomotiveScroll = useStore(getLocomotiveScroll);

  const pathname = usePathname();
  useEffect(() => {
    if (isCanvasLoaded && pathname != "/") {
      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const skills = document.getElementById("skills");
      const work = document.getElementById("work");

      let sections = [home, about, skills, work];

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "home") {
              setActiveSection(null);
            }
            if (entry.target.id == "about") {
              setActiveSection("about");
            }
            if (entry.target.id == "skills") {
              setActiveSection("skills");
            }
            if (entry.target.id == "work") {
              setActiveSection("work");
            }
          }
        });
      }, observerOptions);

      sections?.forEach((section) => {
        section && observer.observe(section);
      });
    }
  }, [isCanvasLoaded]);

  if (pathname != "/") {
    return <></>;
  }

  return (
    <ul className="scroll-nav items-center pe-11">
      <li
        className={`header-nav-link  ${
          activeSection == "about" && "active-link"
        }`}
      >
        <a
          className="navig-link"
          onClick={() => setLocomotiveScroll.scrollTo("#about")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0125 19.162L14.8246 17.3398L16.2427 18.7501L12.012 23.0046L7.75726 18.7739L9.16751 17.3557L11.0126 19.1905L10.998 0.997021L12.998 0.995422L13.0125 19.162Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="hoverable-rect">WHAT DO I OFFER</span>
        </a>
      </li>
      <li
        className={`header-nav-link  ${
          activeSection == "skills" && "active-link"
        }`}
      >
        <a
          className="navig-link"
          onClick={() => setLocomotiveScroll.scrollTo("#skills")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0125 19.162L14.8246 17.3398L16.2427 18.7501L12.012 23.0046L7.75726 18.7739L9.16751 17.3557L11.0126 19.1905L10.998 0.997021L12.998 0.995422L13.0125 19.162Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="hoverable-rect">My skills</span>
        </a>
      </li>
      <li
        className={`header-nav-link  ${
          activeSection == "work" && "active-link"
        }`}
      >
        <a
          className="navig-link"
          onClick={() => setLocomotiveScroll.scrollTo("#work")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0125 19.162L14.8246 17.3398L16.2427 18.7501L12.012 23.0046L7.75726 18.7739L9.16751 17.3557L11.0126 19.1905L10.998 0.997021L12.998 0.995422L13.0125 19.162Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="hoverable-rect">Work</span>
        </a>
      </li>
      <li className="header-nav-link">
        <a
          className="navig-link"
          onClick={() => setLocomotiveScroll.scrollTo("#contact")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0125 19.162L14.8246 17.3398L16.2427 18.7501L12.012 23.0046L7.75726 18.7739L9.16751 17.3557L11.0126 19.1905L10.998 0.997021L12.998 0.995422L13.0125 19.162Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="hoverable-rect">Contact</span>
        </a>
      </li>
    </ul>
  );
};

export default HomeNavigation;
