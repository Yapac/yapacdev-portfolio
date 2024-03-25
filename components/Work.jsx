import { Carousel } from "@/ui";
import { cardo } from "@/libs/fonts";

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

async function getWork() {
  const query = ` *[_type == "work"] | order(_createdAt desc) `;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 3600;

export default async function Work() {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const Data = await getWork();

  return (
    <section id="work">
      <div className="timeline-header">
        <h2 className={cardo.className + " timeline-header__title"}>My work</h2>
        <h3 className={" timeline-header__subtitle"}>
          DISCOVER SOME OF MY WORK
        </h3>
      </div>

      <div className="container flex flex-wrap">
        <div className="w-full">
          <Carousel
            Data={Data.map((item) => ({
              ...item,
              image: urlFor(item.image).url(),
            }))}
          />
        </div>
      </div>
    </section>
  );
}
