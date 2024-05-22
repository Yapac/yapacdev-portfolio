import { Carousel } from "@/ui";

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

async function getWork() {
  const query = ` *[_type == "work"] | order(_createdAt desc) `;

  const data = await client.fetch(query);
  return data;
}

export default async function Work() {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const Data = await getWork();

  return (
    <section id="work" className="container nav-highlight  overflow-clip">
      <div className="timeline-header">
        <h2 className={" timeline-header__title"}>Selected work</h2>
        <h3 className={" timeline-header__subtitle"}>
          DISCOVER SOME OF MY WORK
        </h3>
      </div>

      <Carousel
        Data={Data.map((item) => ({
          ...item,
          image: urlFor(item.image).url(),
        }))}
      />
    </section>
  );
}
