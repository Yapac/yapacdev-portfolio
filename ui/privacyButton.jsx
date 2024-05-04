"use client";
import useStore from "@/store/store";
import TransitionLink from "./TransitionLink";

const PrivacyButton = () => {
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <TransitionLink
      className="privacy-link"
      href="/privacy"
      onClick={toggleMenu}
    >
      <span className="hoverable-rect">Privacy Policy</span>
    </TransitionLink>
  );
};

export default PrivacyButton;
