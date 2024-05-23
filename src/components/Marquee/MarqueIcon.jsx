import Marquee from "react-fast-marquee";
import Image from "../Image";
import { skills, style } from "./marqueeIcons";

const MarqueeIcon = () => {
  return (
    <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <Marquee gradient={false} pauseOnHover={true} speed={100}>
        {skills.map((skill) => (
          <Image data={{ ...skill, style }} key={skill.altText} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeIcon;
