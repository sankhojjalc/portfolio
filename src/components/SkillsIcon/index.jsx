import { skills } from "./skillIconsUtil";
import Skill from "./Skill";

const SkillIcons = () => {
  return (
    <>
      {skills.map((icon) => (
        <Skill icon={icon} key={icon.altText} />
      ))}
    </>
  );
};

export default SkillIcons;
