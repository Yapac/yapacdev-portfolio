import { cardo, open_Sans, pathway_Gothic_One } from "@/app/fonts";
import { SkillCard } from "../ui";

export default function Skills() {
  const Data = [
    // {
    //   id: 0,
    //   cardType: "normal",
    //   title: "HTML",
    //   type: "normal",
    //   imageLink:
    //     "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    //   HP: "95",
    //   Attack: "65",
    //   Defense: "70",
    //   Speed: "55",
    //   Ability: "Build",
    //   HiddenAbility: "Anticipation",
    // },
    {
      id: 1,
      cardType: "water",
      title: "CSS",
      type: "water",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      HP: "130",
      Attack: "65",
      Defense: "60",
      Speed: "65",
      Ability: "Charm",
      HiddenAbility: "Hydration",
    },
    {
      id: 2,
      cardType: "electric",
      title: "Javascript",
      type: "electric",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png",
      HP: "85",
      Attack: "95",
      Defense: "80",
      Speed: "130",
      Ability: "Control",
      HiddenAbility: "Quick Feet",
    },
    {
      id: 3,
      cardType: "psychic",
      title: "Bootstrap",
      type: "psychic",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
      HP: "65",
      Attack: "130",
      Defense: "60",
      Speed: "65",
      Ability: "Resize",
      HiddenAbility: "Guts",
    },
    {
      id: 4,
      cardType: "wind",
      title: "React.js",
      type: "atom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      HP: "105",
      Attack: "90",
      Defense: "95",
      Speed: "130",
      Ability: "Smart",
      HiddenAbility: "Imperative",
    },
    {
      id: 5,
      cardType: "ice",
      title: "PHP",
      type: "snow",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      HP: "85",
      Attack: "105",
      Defense: "90",
      Speed: "110",
      Ability: "Synchronize",
      HiddenAbility: "Bouncy",
      imgStyle: { maxHeight: 105 + "px" },
    },
    {
      id: 6,
      cardType: "water",
      title: "WORDPRESS",
      type: "ice",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png",
      HP: "65",
      Attack: "60",
      Defense: "110",
      Speed: "65",
      Ability: "Immortality",
      HiddenAbility: "Ice Body",
    },
    {
      id: 7,
      cardType: "fairy",
      title: "THREE.JS",
      type: "fairy",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg",
      HP: "95",
      Attack: "105",
      Defense: "90",
      Speed: "80",
      Ability: "Reality",
      HiddenAbility: "Physical",
    },
    {
      id: 8,
      cardType: "grass",
      title: "C#",
      type: "grass",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg",
      HP: "65",
      Attack: "110",
      Defense: "130",
      Speed: "95",
      Ability: "Elasticity",
      HiddenAbility: "Chlorophyll",
    },
    {
      id: 9,
      cardType: "earth",
      title: "MERN",
      type: "earth",
      imageLink:
        "https://www.mangoitsolutions.com/wp-content/uploads/2022/01/becomeamernstackdeveloper-mobile-300x279.png",
      HP: "125",
      Attack: "130",
      Defense: "105",
      Speed: "95",
      Ability: "Flow",
      HiddenAbility: "Hexagonical",
    },
    {
      id: 11,
      cardType: "dark",
      title: "Android studio",
      type: "dark",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg",
      HP: "105",
      Attack: "95",
      Defense: "110",
      Speed: "80",
      Ability: "Wealth",
      HiddenAbility: "Inner Focus",
    },
    {
      id: 12,
      cardType: "ice",
      title: "UNITY",
      type: "shadow",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg",
      HP: "85",
      Attack: "125",
      Defense: "80",
      Speed: "70",
      Ability: "Enjoyment",
      HiddenAbility: "Storytelling",
      imgStyle: { maxWidth: 210 + "px" },
    },
    {
      id: 13,
      cardType: "water",
      title: "MY SQL",
      type: "glass",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
      HP: "95",
      Attack: "65",
      Defense: "70",
      Speed: "55",
      Ability: "Time Freezing",
      HiddenAbility: "Camouflage",
    },
    {
      id: 14,
      cardType: "wind",
      title: "Photoshop",
      type: "wind",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
      HP: "85",
      Attack: "110",
      Defense: "130",
      Speed: "85",
      Ability: "Stretching",
      HiddenAbility: "Pixilate",
    },
    {
      id: 15,
      cardType: "normal",
      title: "Illustrator",
      type: "magic",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
      HP: "65",
      Attack: "110",
      Defense: "130",
      Speed: "95",
      Ability: "Regen",
      HiddenAbility: "Shapelessness",
    },
    {
      id: 16,
      cardType: "water",
      title: "Premier pro",
      type: "storm",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
      HP: "75",
      Attack: "110",
      Defense: "120",
      Speed: "95",
      Ability: "Flying",
      HiddenAbility: "Manipulation",
    },
    {
      id: 17,
      cardType: "electric",
      title: "Blender",
      type: "electric",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
      HP: "65",
      Attack: "110",
      Defense: "130",
      Speed: "95",
      Ability: "X-Ray",
      HiddenAbility: "Dimension",
    },
    {
      id: 18,
      cardType: "dark",
      title: "Framer",
      type: "dark",
      imageLink:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/framer_logo_icon_169149.png",
      HP: "65",
      Attack: "110",
      Defense: "95",
      Speed: "120",
      Ability: "Predicting",
      HiddenAbility: "Magic",
    },
  ];
  return (
    <section id="skills">
      <div className="timeline-header">
        <h2 className={cardo.className + " timeline-header__title"}>
          My skills
        </h2>
        <h3
          className={
            pathway_Gothic_One.className + " timeline-header__subtitle"
          }
        >
          DISCOVER MY SUPERPOWERS
        </h3>
      </div>
      <div id="cards" className={open_Sans.className}>
        {Data &&
          Data.map((skill) => {
            return <SkillCard {...skill} key={skill.id} />;
          })}
      </div>
    </section>
  );
}
