import { skills } from "./skillIconsUtil";
const SkillIcons = () => {
  return (
    <>
      {skills.map((icon) => (
        <img
          key={icon.altText}
          width="50"
          height="50"
          src={icon.src}
          alt={icon.altText}
        />
      ))}
    </>
  );
};

export default SkillIcons;
