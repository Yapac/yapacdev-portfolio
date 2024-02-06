"use client";
import { useEffect } from "react";

export default function Contact() {
  const hideBanners = (e) => {
    document
      .querySelectorAll(".banner.visible")
      .forEach((b) => b.classList.remove("visible"));
  };

  useEffect(() => {
    /* CONTACT FORM */

    /**
     * fullscreenForm.js v1.0.0
     * http://www.codrops.com
     *
     */
    (function (window) {
      "use strict";

      var support = { animations: true },
        animEndEventNames = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd",
          msAnimation: "MSAnimationEnd",
          animation: "animationend",
        },
        // animation end event name
        animEndEventName = animEndEventNames.animation;

      /**
       * extend obj function
       */
      function extend(a, b) {
        for (var key in b) {
          if (b.hasOwnProperty(key)) {
            a[key] = b[key];
          }
        }
        return a;
      }

      /**
       * createElement function
       * creates an element with tag = tag, className = opt.cName, innerHTML = opt.inner and appends it to opt.appendTo
       */
      function createElement(tag, opt) {
        var el = document.createElement(tag);
        if (opt) {
          if (opt.cName) {
            el.className = opt.cName;
          }
          if (opt.inner) {
            el.innerHTML = opt.inner;
          }
          if (opt.appendTo) {
            opt.appendTo.appendChild(el);
          }
        }
        return el;
      }

      /**
       * FForm function
       */
      function FForm(el, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
      }

      /**
       * FForm options
       */
      FForm.prototype.options = {
        // show progress bar
        ctrlProgress: true,
        // show navigation dots
        ctrlNavDots: true,
        // show [current field]/[total fields] status
        ctrlNavPosition: true,
        // reached the review and submit step
        onReview: function () {
          return false;
        },
      };

      /**
       * init function
       * initialize and cache some vars
       */
      FForm.prototype._init = function () {
        // the form element
        this.formEl = this.el.querySelector("form");

        // list of fields
        this.fieldsList = this.formEl.querySelector("ol.fs-fields");

        // current field position
        this.current = 0;

        // all fields
        this.fields = [].slice.call(this.fieldsList.children);

        // total fields
        this.fieldsCount = this.fields.length;

        // show first field
        this.fields[this.current].classList.add("fs-current");

        // create/add controls
        this._addControls();

        // create/add messages
        this._addErrorMsg();

        // init events
        this._initEvents();
      };

      /**
       * addControls function
       * create and insert the structure for the controls
       */
      FForm.prototype._addControls = function () {
        // main controls wrapper
        this.ctrls = createElement("div", {
          cName: "fs-controls",
          appendTo: this.el,
        });

        // continue button (jump to next field)
        this.ctrlContinue = createElement("button", {
          cName: "fs-continue hoverable",
          inner: "Continue",
          appendTo: this.ctrls,
        });
        this._showCtrl(this.ctrlContinue);

        // navigation dots
        if (this.options.ctrlNavDots) {
          this.ctrlNav = createElement("nav", {
            cName: "fs-nav-dots hoverable-rect",
            appendTo: this.ctrls,
          });
          var dots = "";
          for (var i = 0; i < this.fieldsCount; ++i) {
            dots +=
              i === this.current
                ? '<button class="fs-dot-current"></button>'
                : "<button disabled></button>";
          }
          this.ctrlNav.innerHTML = dots;
          this._showCtrl(this.ctrlNav);
          this.ctrlNavDots = [].slice.call(this.ctrlNav.children);
        }

        // field number status
        if (this.options.ctrlNavPosition) {
          this.ctrlFldStatus = createElement("span", {
            cName: "fs-numbers",
            appendTo: this.ctrls,
          });

          // current field placeholder
          this.ctrlFldStatusCurr = createElement("span", {
            cName: "fs-number-current",
            inner: Number(this.current + 1),
          });
          this.ctrlFldStatus.appendChild(this.ctrlFldStatusCurr);

          // total fields placeholder
          this.ctrlFldStatusTotal = createElement("span", {
            cName: "fs-number-total",
            inner: this.fieldsCount,
          });
          this.ctrlFldStatus.appendChild(this.ctrlFldStatusTotal);
          this._showCtrl(this.ctrlFldStatus);
        }

        // progress bar
        if (this.options.ctrlProgress) {
          this.ctrlProgress = createElement("div", {
            cName: "fs-progress",
            appendTo: this.ctrls,
          });
          this._showCtrl(this.ctrlProgress);
        }
      };

      /**
       * addErrorMsg function
       * create and insert the structure for the error message
       */
      FForm.prototype._addErrorMsg = function () {
        // error message
        this.msgError = createElement("span", {
          cName: "fs-message-error",
          appendTo: this.el,
        });
      };

      /**
       * init events
       */
      FForm.prototype._initEvents = function () {
        var self = this;

        // show next field
        this.ctrlContinue.addEventListener("click", function () {
          self._nextField();
        });

        // navigation dots
        if (this.options.ctrlNavDots) {
          this.ctrlNavDots.forEach(function (dot, pos) {
            dot.addEventListener("click", function () {
              self._showField(pos);
            });
          });
        }

        // jump to next field without clicking the continue button (for fields/list items with the attribute "data-input-trigger")
        this.fields.forEach(function (fld) {
          if (fld.hasAttribute("data-input-trigger")) {
            var input =
              fld.querySelector('input[type="radio"]') ||
              /*fld.querySelector( '.cs-select' ) ||*/ fld.querySelector(
                "select"
              ); // assuming only radio and select elements (TODO: exclude multiple selects)
            if (!input) return;

            switch (input.tagName.toLowerCase()) {
              case "select":
                input.addEventListener("change", function () {
                  self._nextField();
                });
                break;

              case "input":
                [].slice
                  .call(fld.querySelectorAll('input[type="radio"]'))
                  .forEach(function (inp) {
                    inp.addEventListener("change", function (ev) {
                      self._nextField();
                    });
                  });
                break;
            }
          }
        });

        // keyboard navigation events - jump to next field when pressing enter
        document.addEventListener("keydown", function (ev) {
          if (
            !self.isLastStep &&
            ev.target.tagName.toLowerCase() !== "textarea"
          ) {
            var keyCode = ev.keyCode || ev.which;
            if (keyCode === 13) {
              ev.preventDefault();
              self._nextField();
            }
          }
        });
      };

      /**
       * nextField function
       * jumps to the next field
       */
      FForm.prototype._nextField = function (backto) {
        if (this.isLastStep || !this._validade() || this.isAnimating) {
          return false;
        }
        this.isAnimating = true;

        // check if on last step
        this.isLastStep =
          this.current === this.fieldsCount - 1 && backto === undefined
            ? true
            : false;

        // clear any previous error messages
        this._clearError();

        // current field
        var currentFld = this.fields[this.current];

        // save the navigation direction
        this.navdir =
          backto !== undefined
            ? backto < this.current
              ? "prev"
              : "next"
            : "next";

        // update current field
        this.current = backto !== undefined ? backto : this.current + 1;

        if (backto === undefined) {
          // update progress bar (unless we navigate backwards)
          this._progress();

          // save farthest position so far
          this.farthest = this.current;
        }

        // add class "fs-display-next" or "fs-display-prev" to the list of fields
        this.fieldsList.classList.add("fs-display-" + this.navdir);

        // remove class "fs-current" from current field and add it to the next one
        // also add class "fs-show" to the next field and the class "fs-hide" to the current one
        currentFld.classList.remove("fs-current");
        currentFld.classList.add("fs-hide");

        if (!this.isLastStep) {
          // update nav
          this._updateNav();

          // change the current field number/status
          this._updateFieldNumber();

          var nextField = this.fields[this.current];
          nextField.classList.add("fs-current", "fs-show");
        }

        // after animation ends remove added classes from fields
        var self = this,
          onEndAnimationFn = function (ev) {
            if (support.animations) {
              this.removeEventListener(animEndEventName, onEndAnimationFn);
            }

            self.fieldsList.classList.remove("fs-display-" + self.navdir);
            currentFld.classList.remove("fs-hide");

            if (self.isLastStep) {
              // show the complete form and hide the controls
              self._hideCtrl(self.ctrlNav);
              self._hideCtrl(self.ctrlProgress);
              self._hideCtrl(self.ctrlContinue);
              self._hideCtrl(self.ctrlFldStatus);
              // replace class fs-form-full with fs-form-overview

              self.formEl.classList.remove("fs-form-full");

              self.formEl.classList.add("fs-form-overview", "fs-show");

              // callback
              self.options.onReview();
            } else {
              nextField.classList.remove("fs-show");

              if (self.options.ctrlNavPosition) {
                self.ctrlFldStatusCurr.innerHTML =
                  self.ctrlFldStatusNew.innerHTML;
                self.ctrlFldStatus.removeChild(self.ctrlFldStatusNew);

                self.ctrlFldStatus.classList.remove("fs-show-" + self.navdir);
              }
            }
            self.isAnimating = false;
          };

        if (support.animations) {
          if (this.navdir === "next") {
            if (this.isLastStep) {
              currentFld
                .querySelector(".fs-anim-upper")
                .addEventListener(animEndEventName, onEndAnimationFn);
            } else {
              nextField
                .querySelector(".fs-anim-lower")
                .addEventListener(animEndEventName, onEndAnimationFn);
            }
          } else {
            nextField
              .querySelector(".fs-anim-upper")
              .addEventListener(animEndEventName, onEndAnimationFn);
          }
        } else {
          onEndAnimationFn();
        }
      };

      /**
       * showField function
       * jumps to the field at position pos
       */
      FForm.prototype._showField = function (pos) {
        if (pos === this.current || pos < 0 || pos > this.fieldsCount - 1) {
          return false;
        }
        this._nextField(pos);
      };

      /**
       * updateFieldNumber function
       * changes the current field number
       */
      FForm.prototype._updateFieldNumber = function () {
        if (this.options.ctrlNavPosition) {
          // first, create next field number placeholder
          this.ctrlFldStatusNew = document.createElement("span");
          this.ctrlFldStatusNew.className = "fs-number-new";
          this.ctrlFldStatusNew.innerHTML = Number(this.current + 1);

          // insert it in the DOM
          this.ctrlFldStatus.appendChild(this.ctrlFldStatusNew);

          // add class "fs-show-next" or "fs-show-prev" depending on the navigation direction
          var self = this;
          setTimeout(function () {
            self.ctrlFldStatus.classList.add(
              self.navdir === "next" ? "fs-show-next" : "fs-show-prev"
            );
          }, 25);
        }
      };

      /**
       * progress function
       * updates the progress bar by setting its width
       */
      FForm.prototype._progress = function () {
        if (this.options.ctrlProgress) {
          this.ctrlProgress.style.width =
            this.current * (100 / this.fieldsCount) + "%";
        }
      };

      /**
       * updateNav function
       * updates the navigation dots
       */
      FForm.prototype._updateNav = function () {
        if (this.options.ctrlNavDots) {
          this.ctrlNav
            .querySelector("button.fs-dot-current")
            .classList.remove("fs-dos.current");
          this.ctrlNavDots[this.current].classList.add("fs-dot-current");
          this.ctrlNavDots[this.current].disabled = false;
        }
      };

      /**
       * showCtrl function
       * shows a control
       */
      FForm.prototype._showCtrl = function (ctrl) {
        ctrl.classList.add("fs-show");
      };

      /**
       * hideCtrl function
       * hides a control
       */
      FForm.prototype._hideCtrl = function (ctrl) {
        ctrl.classList.remove("fs-show");
      };

      // TODO: this is a very basic validation function. Only checks for required fields..
      FForm.prototype._validade = function () {
        var fld = this.fields[this.current],
          input =
            fld.querySelector("input[required]") ||
            fld.querySelector("textarea[required]") ||
            fld.querySelector("select[required]"),
          error;

        if (!input) return true;

        switch (input.tagName.toLowerCase()) {
          case "input":
            if (input.type === "radio" || input.type === "checkbox") {
              var checked = 0;
              [].slice
                .call(fld.querySelectorAll('input[type="' + input.type + '"]'))
                .forEach(function (inp) {
                  if (inp.checked) {
                    ++checked;
                  }
                });
              if (!checked) {
                error = "NOVAL";
              }
            } else if (input.value === "") {
              error = "NOVAL";
            }
            break;

          case "select":
            // assuming here '' or '-1' only
            if (input.value === "" || input.value === "-1") {
              error = "NOVAL";
            }
            break;

          case "textarea":
            if (input.value === "") {
              error = "NOVAL";
            }
            break;
        }

        if (error != undefined) {
          this._showError(error);
          return false;
        }

        return true;
      };

      // TODO
      FForm.prototype._showError = function (err) {
        var message = "";
        switch (err) {
          case "NOVAL":
            message = "Please fill the field before continuing";
            break;
          case "INVALIDEMAIL":
            message = "Please fill a valid email address";
            break;
          // ...
        }
        this.msgError.innerHTML = message;
        this._showCtrl(this.msgError);
      };

      // clears/hides the current error message
      FForm.prototype._clearError = function () {
        this._hideCtrl(this.msgError);
      };

      // add to global namespace
      window.FForm = FForm;
    })(window);

    (function () {
      var formWrap = document.getElementById("fs-form-wrap");

      [].slice
        .call(document.querySelectorAll("select.cs-select"))
        .forEach(function (el) {
          new SelectFx(el, {
            stickyPlaceholder: false,
            onChange: function (val) {
              document.querySelector(
                "span.cs-placeholder"
              ).style.backgroundColor = val;
            },
          });
        });

      new FForm(formWrap, {
        onReview: function () {
          document.body.classList.add("overview");
        },
      });
    })();

    /* HEADER DISAPEARING WHEN GETTING TO THE CONTACT FORM */
    const handleScroll = () => {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;

      var documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      if (scrollTop + window.innerHeight > documentHeight - 200) {
        const header = document.querySelector("header");

        header.classList.add("fadeOut");
      } else {
        const header = document.querySelector("header");

        header.classList.remove("fadeOut");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="contact" className="js cssanimations csscalc cssvhunit">
      {/* <!-- BANNER--> */}
      <div className="banner success">
        <div className="banner-icon">
          <svg
            name="checkmark-done-outline"
            className="banner-inside-icon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
            />
          </svg>
        </div>
        <div className="banner-message">Everything was fine!</div>
        <div className="banner-close" onClick={hideBanners}>
          <svg
            name="close-outline"
            className="banner-inside-icon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </div>
      </div>
      <div className="fs-form-wrap" id="fs-form-wrap">
        <p className="copyright-text">Copyright © YapacDev</p>
        <div className="fs-title">
          <h3>Let's talk</h3>

          <div className="codrops-top">
            <a
              className="codrops-icon"
              href="https://www.instagram.com/yapacdev/"
              target="_blank"
            >
              <div className="icon-inner md hydrated">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                  <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                </svg>
              </div>
              <span>Find me on instagram!</span>
            </a>
            <a
              className="codrops-icon"
              href="https://wa.me/212656034248?text=Heey%2CIm+from+the+website%21"
              target="_blank"
            >
              <div className="icon-inner  md hydrated">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span>We can chat if you want!</span>
            </a>

            <a
              className="codrops-icon"
              href="https://www.linkedin.com/in/yapacdev/"
              target="_blank"
            >
              <div className="icon-inner md hydrated">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                </svg>
              </div>

              <span>Yassine Elatlassi</span>
            </a>
          </div>
        </div>
        <form
          id="myform"
          className="fs-form fs-form-full"
          action="https://formsubmit.co/yassinelatlassi@gmail.com"
          method="POST"
        >
          {/* <!-- Honeypot --> */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* <!-- Disable chaptcha --> */}
          <input type="hidden" name="_captcha" value="true" />

          {/* <!-- Success page --> */}
          <input
            type="hidden"
            name="_next"
            value="https://yapacdev.com/?success=true"
          />

          {/* <!-- Template --> */}
          <input type="hidden" name="_template" value="basic" />

          {/* <!-- Form --> */}
          <ol className="fs-fields">
            <li>
              <label className="fs-field-label fs-anim-upper" htmlFor="q1">
                What's your name?
              </label>
              <input
                className="fs-anim-lower"
                id="q1"
                name="Name"
                type="text"
                placeholder="Dean Moriarty"
                style={{
                  backgroundImage: `url(images/abacusstar.svg)`,
                }}
                required
              />
            </li>
            <li>
              <label
                className="fs-field-label fs-anim-upper"
                htmlFor="q2"
                data-info="I won't send you spam, i promise..."
              >
                What's your email address?
              </label>
              <input
                className="fs-anim-lower"
                id="q2"
                name="Email"
                type="email"
                placeholder="dean@road.us"
                style={{
                  backgroundImage: `url(images/abacusstar.svg)`,
                }}
                required
              />
            </li>
            <li data-input-trigger>
              <label
                className="fs-field-label fs-anim-upper"
                htmlFor="q3a"
                data-info="This will help me know what kind of service you need"
              >
                Why this email?
              </label>
              <div
                className="fs-radio-group fs-radio-custom clearfix fs-anim-lower"
                style={{
                  background: `url(images/abacusstar.svg) no-repeat top right`,
                  backgroundSize: "18px",
                }}
              >
                <span>
                  <input
                    id="q3b"
                    name="Type&nbsp;of&nbsp;email"
                    type="radio"
                    value="informations"
                    required
                  />
                  <label
                    htmlFor="q3b"
                    className="radio"
                    style={{
                      backgroundImage: `url(images/info.png)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "85%",
                      backgroundPosition: "50% 0%",
                    }}
                  >
                    <p className="fs-type-text">Asking for infromations</p>
                  </label>
                </span>
                <span>
                  <input
                    id="q3c"
                    name="Type&nbsp;of&nbsp;email"
                    type="radio"
                    value="job"
                    required
                  />
                  <label
                    htmlFor="q3c"
                    className="radio"
                    style={{
                      backgroundImage: `url(images/job-search.png)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "85%",
                      backgroundPosition: "50% 0%",
                    }}
                  >
                    <p className="fs-type-text">Job Opportunity</p>
                  </label>
                </span>
                <span>
                  <input
                    id="q3a"
                    name="Type&nbsp;of&nbsp;email"
                    type="radio"
                    value="others"
                    required
                  />
                  <label
                    htmlFor="q3a"
                    className="radio"
                    style={{
                      backgroundImage: `url(images/more.png)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "85%",
                      backgroundPosition: "50% 0%",
                    }}
                  >
                    <p className="fs-type-text">Others</p>
                  </label>
                </span>
              </div>
            </li>

            <li>
              <label className="fs-field-label fs-anim-upper" htmlFor="q4">
                Write your message:
              </label>
              <textarea
                className="fs-anim-lower"
                id="q4"
                name="Message"
                placeholder="Describe here"
              ></textarea>
            </li>
          </ol>
          <button className="fs-submit hoverable" type="submit">
            Send answers
          </button>
        </form>
        {/* <!-- /form --> */}
      </div>
    </div>
  );
}
