"use client";
import { TimelineItem } from "../ui";

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

async function getTimelines() {
  const query = ` *[_type == "timeline"] | order(_createdAt asc)`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 3600;

export default async function Timeline() {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const Data = await getTimelines();

  return (
    <div className="timeline">
      {Data &&
        Data.map((timeline, index) => (
          <TimelineItem
            indexId={index}
            key={timeline._id}
            title={timeline.title}
            year={timeline.year}
            image={urlFor(timeline.image).url()}
            description={timeline.description}
          />
        ))}
    </div>
  );
}
