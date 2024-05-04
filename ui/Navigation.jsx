"use client";
import useStore from "@/store/store";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <ul>
      <li className={usePathname() == "/" ? "active" : ""}>
        <TransitionLink className="navig-link" href="/" onClick={toggleMenu}>
          <span className="hoverable-rect" data-hover-text="Home">
            Home
          </span>
        </TransitionLink>
      </li>
      <li className={usePathname() == "/about" ? "active" : ""}>
        <TransitionLink
          className="navig-link"
          href="/about"
          onClick={toggleMenu}
        >
          <span className="hoverable-rect" data-hover-text="About">
            About
          </span>
        </TransitionLink>
      </li>
      <li className={usePathname() == "/contact" ? "active" : ""}>
        <TransitionLink
          className="navig-link"
          href="/contact"
          onClick={toggleMenu}
        >
          <span className="hoverable-rect" data-hover-text="Contact">
            Contact
          </span>
        </TransitionLink>
      </li>
    </ul>
  );
};

export default Navigation;
