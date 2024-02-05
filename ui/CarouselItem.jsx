import Image from "next/image";

export default function CarouselItem({
  title,
  type,
  image,
  color,
  description,
  link,
  buttonText,
}) {
  return (
    <div className="item">
      <div className="flex flex-wrap justify-center ">
        <div className="w-full md:w-11/12">
          <div className="testimony-wrap md:flex">
            <div className="img relative">
              <Image
                className="img"
                src={image}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                alt={"Picture of " + title}
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="text center text-center p-6 py-xl-5 px-xl-5 flex justify-center items-center">
              <div className="desc w-100">
                <p className="h3 mb-12">"{title}</p>
                <div className="pt-6">
                  <p className="name mb-0" style={{ color: `${color}` }}>
                    &mdash; {type}
                  </p>
                  <span className="position">{description}</span>
                </div>
                <button className="explore hoverable">
                  <a href={link} target="_blank">
                    {buttonText}
                    <span className="icon-right"></span>
                    <span className="icon-right after"></span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
