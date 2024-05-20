import Icon from "../../components/Icons";
import Skills from "../../components/SkillsIcon/Skill";
import { contactMe } from "../../assets/constants";

const RenderIconDescription = (props) => {
  return (
    <div className="flex gap-1 my-2 justify-center">
      {props?.isImage ? (
        <a href="https://www.linkedin.com/in/sankhojjalchatterjee/">
          <Skills icon={props} />
        </a>
      ) : (
        <Icon iconName={props.iconName} />
      )}
      {props?.isImage ? (
        <a
          href="https://www.linkedin.com/in/sankhojjalchatterjee/"
          className=""
        >
          <span className="xl:text-2xl hover:underline">
            {props.description}
          </span>
        </a>
      ) : (
        <span className="xl:text-2xl">{props.description}</span>
      )}
    </div>
  );
};

const IconDescriptionPair = () => {
  return (
    <div className="border md:flex md:justify-around lg:justify-center h-auto md:h-20 items-center mt-14 lg:mt-40  md:gap-5 lg:gap-16">
      {contactMe.map((item) => (
        <RenderIconDescription key={item.key} {...item.data} />
      ))}
    </div>
  );
};

export default IconDescriptionPair;
