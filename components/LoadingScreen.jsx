"use client";
import useStore, { getFirstLoad } from "@/store/store";
import "../styles/LoadingSceen.css";

export default function LoadingScreen() {
  const firstLoad = useStore(getFirstLoad);

  return (
    <section id="loading-container" className={firstLoad ? " hidden" : ""}>
      <div className="🤚 hidden">
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="🌴"></div>
        <div className="👍"></div>
      </div>
      <div>
        <h2 className="loading-title" data-text="YAPACDEV">
          YAPACDEV
          <span className="loading-bar">YAPACDEV</span>
        </h2>
        <div className="loading-subtext">
          <p>Crafting with precision</p>
          <p className="loading-value">14%</p>
        </div>
      </div>
    </section>
  );
}
