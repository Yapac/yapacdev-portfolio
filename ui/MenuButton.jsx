"use client";

import useStore from "@/store/store";

const MenuButton = () => {
  const menuState = useStore((state) => state.menuState);
  const toggleMenu = useStore((state) => state.toggleMenu);
  return (
    <span
      className={`js-colorlib-nav-toggle colorlib-nav-toggle hoverable ${
        menuState ? "active" : ""
      }`}
      onClick={toggleMenu}
    >
      <i></i>
    </span>
  );
};

export default MenuButton;
