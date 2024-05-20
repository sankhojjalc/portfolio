import { skills, style } from "./marqueeIcons";
import Image from "../Image";

const MarqueeIcon = () => {
  return (
    <div className="relative flex overflow-x-hidden mt-10 mb-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] overflow-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap flex">
        {skills.map((skill) => (
          <Image data={{ ...skill, style }} key={skill.altText} />
        ))}
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
        {skills.map((skill) => (
          <Image data={{ ...skill, style }} key={skill.altText} />
        ))}
      </div>
    </div>
  );
};

export default MarqueeIcon;
