"use client";
import { CarouselItem } from "@/ui";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import { cardo, pathway_Gothic_One } from "@/app/fonts";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Work() {
  const Data = [
    {
      id: 10,
      title: "Yassine Abouhamid",
      type: "Wordpress website",
      image: "/images/yassineabouhamid.jpg",
      color: "#408f12",
      description: "A website for a Filmmaker/Cinematographer",
      link: "https://yassineabouhamid.com/",
      buttonText: "View website",
    },
    {
      id: 9,
      title: "Zineb Koutten",
      type: "Wordpress website",
      image: "/images/zinebkoutten.jpg",
      color: "#8F1216",
      description: "A website for an International street photographer",
      link: "https://zinebkoutten.com/portfolio/",
      buttonText: "View website",
    },
    {
      id: 8,
      title: "Amenardi sarl",
      type: "Wordpress website",
      image: "/images/amenardi.jpg",
      color: "#b3811e",
      description: "A website for an Inetrior design and Amenagement agency",
      link: "https://amenardi.com",
      buttonText: "View website",
    },
    {
      id: 7,
      title: "Aida Jamal",
      type: "Wordpress website",
      image: "/images/aidajamal.jpg",
      color: "#259584",
      description: "A website for 'TAHSSIS' project and it founder ",
      link: "https://aidajamal.com",
      buttonText: "View website",
    },
    {
      id: 6,
      title: "Cie Haraka",
      type: "Wordpress website",
      image: "/images/cieharaka.jpg",
      color: "#30a6b1",
      description: "A website for a Non-profit art organization",
      link: "https://cieharaka.com",
      buttonText: "View website",
    },
    {
      id: 5,
      title: "Mehdi Dahkan",
      type: "Wordpress website",
      image: "/images/mehdidahkan.jpg",
      color: "#b15581",
      description: "A portfolio website for a contemporary dance choreographer",
      link: "https://mehdidahkan.com",
      buttonText: "View website",
    },
    {
      id: 4,
      title: "Generation Z",
      type: "Wordpress website",
      image: "/images/generationz.jpg",
      color: "#657689",
      description: "A modern wordpress website for an urban art association",
      link: "https://tngenerationz.com",
      buttonText: "View website",
    },
    {
      id: 3,
      title: "Socco Alto",
      type: "Wordpress website",
      image: "/images/soccoalto.jpg",
      color: "#7a6ba6",
      description:
        "A big website for a famous shopping center located in Tangier",
      link: "https://soccoalto.com",
      buttonText: "View website",
    },
    {
      id: 2,
      title: "Borj Fez",
      type: "Wordpress website",
      image: "/images/borjfez.jpg",
      color: "#71b842",
      description: "A big website for a famous shopping center located in Fes",
      link: "https://borjfez.com",
      buttonText: "View website",
    },
    {
      id: 1,
      title: "My Room",
      type: "Webgl experience",
      image: "/images/my-room.jpg",
      color: "#cb7543",
      description:
        "Recreating my childhoom room on 3D as a website user expereince",
      link: "https://yapac.github.io/My-room/",
      buttonText: "View website",
    },
    {
      id: 0,
      title: "Far Away : Running from the future",
      type: "Video game",
      image: "/images/faraway.jpg",
      color: "#974eb9",
      description:
        "First-person parkour shooter game, with an amazing story mode! Made using UNITY",
      link: "https://play.google.com/store/apps/details?id=com.yapacgames.faraway",
      buttonText: "View app",
    },
  ];
  return (
    <section id="work">
      <div className="timeline-header">
        <h2 className={cardo.className + " timeline-header__title"}>My work</h2>
        <h3
          className={
            pathway_Gothic_One.className + " timeline-header__subtitle"
          }
        >
          DISCOVER SOME OF MY WORK
        </h3>
      </div>

      <div className="container">
        <div className="flex flex-wrap ">
          <div className="w-full">
            <OwlCarousel
              className="featured-carousel owl-carousel"
              loop
              margin={30}
              animateIn="flipInX"
              animateOut="slideOutDown"
              nav
              dots
              items={1}
              navText={[
                "<p class='hoverable'><small>Prev</small><svg viewBox='0 0 512 512'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='24' d='M244 400L100 256l144-144M120 256h292'/></svg></p>",
                "<p class='hoverable'><small>Next</small><svg viewBox='0 0 512 512'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='24' d='M268 112l144 144-144 144M392 256H100'/></svg></p>",
              ]}
            >
              {Data &&
                Data.map((item) => {
                  return <CarouselItem {...item} key={item.id} />;
                })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
