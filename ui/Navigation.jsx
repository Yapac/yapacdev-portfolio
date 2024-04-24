"use client";
import useStore from "@/store/store";
import TransitionLink from "./TransitionLink";

const Navigation = () => {
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <ul>
      <li className="active">
        <TransitionLink className="navig-link" href="/" onClick={toggleMenu}>
          <span className="hoverable-rect" data-hover-text="Home">
            Home
          </span>
        </TransitionLink>
      </li>
      <li>
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
      <li>
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
