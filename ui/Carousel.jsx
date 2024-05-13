"use client";
import Slider from "react-slick";
import { CarouselItem } from "@/ui";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Carousel({ Data }) {
  const workRef = useRef(null);

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
    <div className="container flex flex-wrap" ref={workRef}>
      <div className="w-full">
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
      </div>
    </div>
  );
}
