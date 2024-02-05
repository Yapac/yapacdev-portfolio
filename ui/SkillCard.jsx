import { fira_Sans_Condensed } from "@/utils/fonts";
import Image from "next/image";

export default function SkillCard({
  cardType,
  title,
  type,
  imageLink,
  HP,
  Attack,
  Defense,
  Speed,
  Ability,
  HiddenAbility,
  imgStyle,
}) {
  return (
    <figure className={`card card--${cardType} hoverable`}>
      <div className="card__image-container">
        <div className="card_image">
          <Image
            src={imageLink}
            fill
            sizes="80vw"
            alt={"Icon of " + title}
            loading="lazy"
            style={{ objectFit: "contain", imgStyle }}
          />
        </div>
      </div>

      <figcaption className="card__caption">
        <h2 className={`card__name ${fira_Sans_Condensed.className}`}>
          {title}
        </h2>

        <h3 className={`card__type ${fira_Sans_Condensed.className}`}>
          {type}
        </h3>

        <table className="card__stats">
          <tbody>
            <tr>
              <th className={fira_Sans_Condensed.className}>HP</th>
              <td>{HP}</td>
            </tr>
            <tr>
              <th className={fira_Sans_Condensed.className}>Attack</th>
              <td>{Attack}</td>
            </tr>

            <tr>
              <th className={fira_Sans_Condensed.className}>Defense</th>
              <td>{Defense}</td>
            </tr>
            <tr>
              <th className={fira_Sans_Condensed.className}>Speed</th>
              <td>{Speed}</td>
            </tr>
          </tbody>
        </table>

        <div className="card__abilities">
          <h5 className="card__ability">
            <span className="card__label">Ability</span>
            {Ability}
          </h5>
          <h5 className="card__ability">
            <span className="card__label">Hidden Ability</span>
            {HiddenAbility}
          </h5>
        </div>
      </figcaption>
    </figure>
  );
}
