"use client";
import { useState } from "react";
import { SkillCard } from "../ui";

export default function Skills() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      document.documentElement.style.setProperty(
        "--cursor-text",
        '"hide skills"'
      );
      console.log("hide");
    } else {
      document.documentElement.style.setProperty(
        "--cursor-text",
        '"show skills"'
      );
      console.log("show");
    }
  };

  const Data = [
    {
      id: 6,
      cardType: "ice",
      title: "WORDPRESS",
      type: "ice",
      imageLink: "/skillsIcons/wordpress-logo.webp",
      HP: "65",
      Attack: "60",
      Defense: "110",
      Speed: "65",
      Ability: "Immortality",
      HiddenAbility: "Ice Body",
    },
    {
      id: 13,
      cardType: "dark",
      title: "Next.js",
      type: "glass",
      imageLink: "/skillsIcons/nextjs-icon.webp",
      HP: "95",
      Attack: "95",
      Defense: "80",
      Speed: "125",
      Ability: "Speed",
      HiddenAbility: "Camouflage",
    },
    {
      id: 11,
      cardType: "water",
      title: "React Native",
      type: "Atom",
      imageLink: "/skillsIcons/react-native_logo.png",
      HP: "95",
      Attack: "115",
      Defense: "70",
      Speed: "120",
      Ability: "One shot",
      HiddenAbility: "Inner Focus",
    },
    {
      id: 2,
      cardType: "electric",
      title: "Javascript",
      type: "electric",
      imageLink: "/skillsIcons/Javascript-shield.webp",
      HP: "85",
      Attack: "95",
      Defense: "80",
      Speed: "130",
      Ability: "Control",
      HiddenAbility: "Quick Feet",
    },
    // {
    //   id: 3,
    //   cardType: "psychic",
    //   title: "Bootstrap",
    //   type: "psychic",
    //   imageLink: "/skillsIcons/Bootstrap_logo.svg",
    //   HP: "65",
    //   Attack: "130",
    //   Defense: "60",
    //   Speed: "65",
    //   Ability: "Resize",
    //   HiddenAbility: "Guts",
    // },
    {
      id: 4,
      cardType: "wind",
      title: "React.js",
      type: "atom",
      imageLink: "/skillsIcons/React-icon.svg",
      HP: "105",
      Attack: "90",
      Defense: "95",
      Speed: "100",
      Ability: "Smart",
      HiddenAbility: "Imperative",
    },

    {
      id: 9,
      cardType: "earth",
      title: "MERN",
      type: "earth",
      imageLink: "/skillsIcons/Mernstack.webp",
      HP: "125",
      Attack: "130",
      Defense: "105",
      Speed: "95",
      Ability: "Flow",
      HiddenAbility: "Hexagonical",
    },
    {
      id: 7,
      cardType: "fairy",
      title: "THREE.JS",
      type: "fairy",
      imageLink: "/skillsIcons/Three.js_Icon.svg",
      HP: "95",
      Attack: "105",
      Defense: "90",
      Speed: "80",
      Ability: "Reality",
      HiddenAbility: "Physical",
    },

    {
      id: 5,
      cardType: "ice",
      title: "PHP",
      type: "snow",
      imageLink: "/skillsIcons/PHP-logo.svg",
      HP: "85",
      Attack: "105",
      Defense: "90",
      Speed: "110",
      Ability: "Synchronize",
      HiddenAbility: "Bouncy",
      imgStyle: { maxHeight: 105 + "px" },
    },

    {
      id: 12,
      cardType: "ice",
      title: "UNITY",
      type: "shadow",
      imageLink: "/skillsIcons/Unity_Technologies_logo.svg",
      HP: "85",
      Attack: "125",
      Defense: "80",
      Speed: "70",
      Ability: "Enjoyment",
      HiddenAbility: "Storytelling",
    },
    {
      id: 8,
      cardType: "grass",
      title: "C#",
      type: "grass",
      imageLink: "/skillsIcons/C_Sharp_wordmark.svg",
      HP: "65",
      Attack: "110",
      Defense: "130",
      Speed: "95",
      Ability: "Elasticity",
      HiddenAbility: "Chlorophyll",
    },
    {
      id: 1,
      cardType: "water",
      title: "CSS",
      type: "water",
      imageLink: "/skillsIcons/CSS3_logo.svg",
      HP: "130",
      Attack: "65",
      Defense: "60",
      Speed: "65",
      Ability: "Charm",
      HiddenAbility: "Hydration",
    },
    {
      id: 14,
      cardType: "wind",
      title: "Photoshop",
      type: "wind",
      imageLink: "/skillsIcons/Adobe_Photoshop_CC_icon.svg",
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
      imageLink: "/skillsIcons/Adobe_Illustrator_CC_icon.svg",
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
      imageLink: "/skillsIcons/Adobe_Premiere_Pro_CC_icon.svg",
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
      imageLink: "/skillsIcons/Blender_logo_no_text.svg",
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
      imageLink: "/skillsIcons/framer_logo.webp",
      HP: "65",
      Attack: "110",
      Defense: "95",
      Speed: "120",
      Ability: "Predicting",
      HiddenAbility: "Magic",
    },
  ];
  return (
    <section
      id="skills"
      className="container nav-highlight"
      onClick={toggleShowMore}
    >
      <div className="timeline-header">
        <h2 className={" timeline-header__title"}>My skills</h2>
        <h3 className={" timeline-header__subtitle"}>
          DISCOVER MY SUPERPOWERS
        </h3>
      </div>

      <div
        id="cards"
        className={`flex hoverable-button ${!showMore ? "top-display" : ""} `}
      >
        <div className="skills-text">
          <div className="sm_header mb-4">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white"></circle>
            </svg>
            <h3>SKILLS OVERVIEW</h3>
          </div>
          <div className="about-right">
            <div className="skill-stats__item ">
              <h5 className="p3 ">Total skills</h5>
              <h4 className="about-right__number d2">
                <span className="">{Data.length}+</span>
              </h4>
            </div>
            <div className="skill-stats__item ">
              <h5 className="p3 ">Stacks</h5>
              <h4 className="about-right__number d2">
                <span className="">4</span>
              </h4>
            </div>
            <div className="skill-stats__item ">
              <h5 className="p3 ">Possibilities</h5>
              <h4 className="about-right__number d2">
                <span className="">∞</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="skills-cards hiddenc">
          {Data &&
            Data.map((skill, index) => {
              return (
                <SkillCard
                  {...skill}
                  isHidden={index >= 3 && !showMore ? "hidden" : ""}
                  key={skill.id}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
