"use client";
import useStore from "@/store/store";

const Navigation = () => {
  const toggleMenu = useStore((state) => state.toggleMenu);

  const handleClick = (e) => {
    toggleMenu();

    document.querySelector("#root").classList.remove("menu-show");
    document.querySelector("li.active").classList.remove("active");
    e.target.parentElement.classList.add("active");
  };
  return (
    <ul>
      <li className="active">
        <a className="navig-link" href="#about" onClick={(e) => handleClick(e)}>
          <span className="hoverable-rect">About</span>
        </a>
      </li>
      <li>
        <a
          className="navig-link"
          href="#skills"
          onClick={(e) => handleClick(e)}
        >
          <span className="hoverable-rect">My skills</span>
        </a>
      </li>
      <li>
        <a className="navig-link" href="#work" onClick={(e) => handleClick(e)}>
          <span className="hoverable-rect">Work</span>
        </a>
      </li>
      <li>
        <a
          className="navig-link"
          href="#contact"
          onClick={(e) => handleClick(e)}
        >
          <span className="hoverable-rect">Contact</span>
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
