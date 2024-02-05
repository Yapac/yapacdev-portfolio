export default function Hero() {
  return (
    <>
      <a className="scroll-downs hoverable" href="#about">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </a>
      <section id="home" className="hidden">
        <div className="container holder-hero">
          <h1 className="title" data-text="Building Beyond">
            Building Beyond
          </h1>
          <h2 className="slogan" data-text="Boundaries.">
            Boundaries.
          </h2>
          <br />
          <p className="landing-paragraph">
            "Crafting Digital Experiences: Tech mastery, Problem Solving, and
            <br />
            Creative Web Solutions"
          </p>

          <a className="button button-animation btn hoverable" href="#work">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <span>Discover my work</span>
          </a>
        </div>
      </section>
    </>
  );
}
