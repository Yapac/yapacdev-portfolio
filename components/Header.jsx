import { league_Spartan } from "@/libs/fonts";
import { Navigation, HomeNavigation, PrivacyButton } from "@/ui";
import MenuButton from "@/ui/MenuButton";
import TransitionLink from "@/ui/TransitionLink";

export default function Header() {
  return (
    <>
      <nav id="main-nav" role="navigation">
        <div className="js-fullheight colorlib-table header-container">
          <div className="left">
            <section>
              <div className="nav-title">- Socials -</div>
              <ul>
                <li>
                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/yapacdev/"
                    target="_blank"
                  >
                    <span className="hoverable-rect">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    className="social-link"
                    href="https://www.instagram.com/yapacdev/"
                    target="_blank"
                  >
                    <span className="hoverable-rect">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    className="social-link"
                    href="https://github.com/Yapac"
                    target="_blank"
                  >
                    <span className="hoverable-rect">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    className="social-link"
                    href="mailto:yassinelatlassi@gmail.com"
                    target="_blank"
                  >
                    <span className="hoverable-rect">Mail</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="right">
            <section>
              <div className="nav-title">Menu -</div>
              <Navigation />
            </section>
          </div>
        </div>
        <div className="bottom-nav container">
          <div className="flex justify-between container mb-8">
            <PrivacyButton />
          </div>
        </div>
      </nav>

      <header className="fixed-top">
        <div className="container holder-4k">
          <div className="colorlib-navbar-brand hoverable">
            <TransitionLink href="/">
              <p className={`${league_Spartan.className} colorlib-logo`}>
                YapacDev
              </p>
            </TransitionLink>
          </div>
          <div className="flex">
            <HomeNavigation />
            <MenuButton />
          </div>
        </div>
      </header>
    </>
  );
}
