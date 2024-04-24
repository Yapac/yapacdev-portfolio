"use client";
import { animatePageOut } from "@/libs/pageAnimation";
import { usePathname, useRouter } from "next/navigation";

const TransitionLink = ({ children, className, href, onClick }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (onClick) {
      onClick();
      document.querySelector("#root").classList.remove("menu-show");
    }
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default TransitionLink;
