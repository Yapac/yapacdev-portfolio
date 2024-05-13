import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set(bannerOne, {
      delay: 0.75,
      yPercent: 0,
    }).to(bannerOne, {
      yPercent: 100,
    });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set(bannerOne, {
      yPercent: -100,
    }).to(bannerOne, {
      yPercent: 0,

      onComplete: () => {
        router.push(href);
      },
    });
  }
};
