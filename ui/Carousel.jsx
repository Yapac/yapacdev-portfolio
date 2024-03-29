"use client";
import Slider from "react-slick";
import { CarouselItem } from "@/ui";

export default function Carousel({ Data }) {
  //   const Data = [
  //     {
  //       id: 10,
  //       title: "Yassine Abouhamid",
  //       type: "Wordpress website",
  //       image: "/images/yassineabouhamid.webp",
  //       color: "#408f12",
  //       description: "A website for a Filmmaker/Cinematographer",
  //       link: "https://yassineabouhamid.com/",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 9,
  //       title: "Zineb Koutten",
  //       type: "Wordpress website",
  //       image: "/images/zinebkoutten.webp",
  //       color: "#8F1216",
  //       description: "A website for an International street photographer",
  //       link: "https://zinebkoutten.com/portfolio/",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 8,
  //       title: "Amenardi sarl",
  //       type: "Wordpress website",
  //       image: "/images/amenardi.webp",
  //       color: "#b3811e",
  //       description: "A website for an Inetrior design and Amenagement agency",
  //       link: "https://amenardi.com",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 7,
  //       title: "Aida Jamal",
  //       type: "Wordpress website",
  //       image: "/images/aidajamal.webp",
  //       color: "#259584",
  //       description: "A website for 'TAHSSIS' project and it founder ",
  //       link: "https://aidajamal.com",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 6,
  //       title: "Cie Haraka",
  //       type: "Wordpress website",
  //       image: "/images/cieharaka.webp",
  //       color: "#30a6b1",
  //       description: "A website for a Non-profit art organization",
  //       link: "https://cieharaka.com",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 5,
  //       title: "Mehdi Dahkan",
  //       type: "Wordpress website",
  //       image: "/images/mehdidahkan.webp",
  //       color: "#b15581",
  //       description: "A portfolio website for a contemporary dance choreographer",
  //       link: "https://mehdidahkan.com",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 4,
  //       title: "Generation Z",
  //       type: "Wordpress website",
  //       image: "/images/generationz.webp",
  //       color: "#657689",
  //       description: "A modern wordpress website for an urban art association",
  //       link: "https://tngenerationz.com",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 3,
  //       title: "Socco Alto",
  //       type: "Wordpress website",
  //       image: "/images/soccoalto.webp",
  //       color: "#7a6ba6",
  //       description:
  //         "A big website for a famous shopping center located in Tangier",
  //       link: "https://soccoalto.com",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 2,
  //       title: "Borj Fez",
  //       type: "Wordpress website",
  //       image: "/images/borjfez.webp",
  //       color: "#71b842",
  //       description: "A big website for a famous shopping center located in Fes",
  //       link: "https://borjfez.com",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 1,
  //       title: "My Room",
  //       type: "Webgl experience",
  //       image: "/images/my-room.webp",
  //       color: "#cb7543",
  //       description:
  //         "Recreating my childhoom room on 3D as a website user expereince",
  //       link: "https://yapac.github.io/My-room/",
  //       buttonText: "View website",
  //     },
  //     {
  //       id: 0,
  //       title: "Far Away : Running from the future",
  //       type: "Video game",
  //       image: "/images/faraway.webp",
  //       color: "#974eb9",
  //       description:
  //         "First-person shooter game, with an amazing story mode! Made using UNITY",
  //       link: "https://play.google.com/store/apps/details?id=com.yapacgames.faraway",
  //       buttonText: "View app",
  //     },
  //   ];

  function NextArrow(props) {
    const { className, onClick } = props;

    return (
      <button
        type="button"
        role="button"
        aria-label="Next arrow"
        className={className + " hoverable"}
        onClick={onClick}
      >
        <p>
          <small>Next</small>
          <svg viewBox="0 0 512 512">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              d="M268 112l144 144-144 144M392 256H100"
            />
          </svg>
        </p>
      </button>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        role="button"
        aria-label="Prev arrow"
        className={className + " hoverable"}
        onClick={onClick}
      >
        <p>
          <small>Prev</small>
          <svg viewBox="0 0 512 512">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
              d="M244 400L100 256l144-144M120 256h292"
            />
          </svg>
        </p>
      </button>
    );
  }

  return (
    <Slider
      className="work-carousel"
      dots={true}
      infinite={true}
      slidesToShow={1}
      slidesToScroll={1}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
      appendDots={(dots) => (
        <div>
          <ul className="flex justify-center"> {dots} </ul>
        </div>
      )}
      customPaging={() => (
        <button role="button" aria-label="paging" className="slick-dot">
          <span></span>
        </button>
      )}
    >
      {Data &&
        Data.map((item) => {
          return <CarouselItem {...item} key={item._id} />;
        })}
    </Slider>
  );
}
