import { league_Spartan } from "@/libs/fonts";
import { Navigation, HomeNavigation } from "@/ui";
import MenuButton from "@/ui/MenuButton";
import TransitionLink from "@/ui/TransitionLink";

export default function Header() {
  return (
    <>
      <nav id="main-nav" role="navigation">
        <div className="js-fullheight colorlib-table header-container">
          {/* <div className="colorlib-table-cell js-fullheight">
            <div className="row no-gutters">
              <div className="col-md-12 text-center">
                <h2 className="mb-4">
                  <a href="#" className={league_Spartan.className + " logo"}>
                    YapacDev
                  </a>
                </h2>
                
              </div>
            </div>
          </div> */}

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
        <div id="privacy" className="popup">
          <div className="popup__container">
            <div className="popup__content">
              <a href="#" className="popup__close hoverable"></a>
              <h2 className="popup__title r-title">Privacy policy</h2>
              <p>
                Who we are: <br />
                Our website address is: https://yapacdev.com
              </p>
              <p>
                Embedded content from other websites: <br />
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website. These websites may collect data about you, use
                cookies, embed additional third-party tracking, and monitor your
                interaction with that embedded content, including tracking your
                interaction with the embedded content if you have an account and
                are logged in to that website.
              </p>
              <p>
                How long we retain your data: <br />
                contact on our website (if any), we only use these informations
                for contacting purposes and we don't store it in any form of
                away
              </p>
              <p>
                What rights you have over your data: <br />
                If you have an account on this site or have left comments, you
                can request to receive an exported file of the personal data we
                hold about you, including any data you have provided to us. You
                can also request that we erase any personal data we hold about
                you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </p>
              <p>
                Where we send your data: <br />
                We don’t send your data to any 3rd party company, your data is
                safe with us.
              </p>
              <p>
                Comments: <br />
                Visitors cannot leave comments on the site, it’s not an option.
              </p>
              <p>
                Owner: <br />
                Yassine el atlassi - Contact email: yassinelatlassi@gmail.com
              </p>
              <p>
                Far Away : Running from the future: <br />
                Our website address is:
                https://play.google.com/store/apps/details?id=com.yapacgames.faraway
              </p>
              <p>The game don’t collect any data.</p>
              <p>
                <br /> Copyright © YapacDev
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-nav container">
          <div className="flex justify-between container mb-8">
            <a href="#privacy" className="hoverable-rect open-popup">
              Privacy Policy
            </a>
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
