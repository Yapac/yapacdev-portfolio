"use client";

import useStore from "@/store/store";

const MenuButton = () => {
  const menuState = useStore((state) => state.menuState);
  const toggleMenu = useStore((state) => state.toggleMenu);

  const handleClick = () => {
    if (document.querySelector("#root").classList.contains("menu-show")) {
      document.querySelector("#root").classList.remove("menu-show");
    } else {
      document.querySelector("#root").classList.add("menu-show");
    }
    toggleMenu();
  };
  return (
    <span
      className={`js-colorlib-nav-toggle colorlib-nav-toggle hoverable ${
        menuState ? "active" : ""
      }`}
      onClick={handleClick}
    >
      <i></i>
    </span>
  );
};

export default MenuButton;
