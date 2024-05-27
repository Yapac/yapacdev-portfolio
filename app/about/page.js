import TimelineComponent from "@/components/TimelineComponent";
import "./about.css";
import { Cursor } from "@/components";

export const metadata = {
  title: "About me",
};

const About = () => {
  return (
    <div>
      <Cursor />

      <TimelineComponent />
    </div>
  );
};

export default About;
