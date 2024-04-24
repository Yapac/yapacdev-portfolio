"use client";
import useStore, { getActiveTimeline } from "@/store/store";
import Image from "next/image";

export default function TimelineItem({
  indexId,
  title,
  year,
  image,
  description,
}) {
  const activeTimeline = useStore(getActiveTimeline); // Accessing activeTimeline from the store

  return (
    <div
      className={`timeline-item ${
        indexId == activeTimeline && "timeline-item--active"
      } `}
      data-text={title}
    >
      <div className="timeline__content">
        <div className="timeline__img">
          <Image
            className="img"
            src={image}
            fill
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 40vw"
            alt={"Picture of " + title}
            loading="lazy"
            placeholder="empty"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2 className={"timeline__content-title"}>{year}</h2>
        <p className={"timeline__content-desc"}>{description}</p>
      </div>
    </div>
  );
}
