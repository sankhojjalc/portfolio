import Marquee from "react-fast-marquee";
import Image from "../Image";
import { skills, style } from "./marqueeIcons";

const MarqueeIcon = () => {
  return (
    <Marquee gradient={false} pauseOnHover={true} speed={100}>
      {skills.map((skill) => (
        <Image data={{ ...skill, style }} key={skill.altText} />
      ))}
    </Marquee>
  );
};

export default MarqueeIcon;
