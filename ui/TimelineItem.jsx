import { cardo, pathway_Gothic_One } from "@/utils/fonts";
import Image from "next/image";

export default function TimelineItem({
  title,
  year,
  image,
  description,
  isActive,
}) {
  return (
    <div
      className={`timeline-item ${pathway_Gothic_One.className} ${
        isActive ? "timeline-item--active" : ""
      }`}
      data-text={title}
    >
      <div className="timeline__content">
        <div className="timeline__img">
          <Image
            className="img"
            src={image}
            fill
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 33vw"
            alt={"Picture of " + title}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <h2
          className={pathway_Gothic_One.className + " timeline__content-title"}
        >
          {year}
        </h2>
        <p className={cardo.className + " timeline__content-desc"}>
          {description}
        </p>
      </div>
    </div>
  );
}