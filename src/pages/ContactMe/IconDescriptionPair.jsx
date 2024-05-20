import Icon from "../../components/Icons";
import Image from "../../components/Image";
import { contactMe } from "../../assets/constants";

const RenderIconDescription = (props) => {
  return (
    <div className="flex gap-1 my-2 justify-center">
      {props?.isImage ? (
        <a href="https://www.linkedin.com/in/sankhojjalchatterjee/">
          <Image data={props} />
        </a>
      ) : (
        <Icon iconName={props.iconName} />
      )}
      {props?.isImage ? (
        <a href="https://www.linkedin.com/in/sankhojjalchatterjee/">
          <span className="xl:text-2xl hover:underline underline-offset-8">
            {props.description}
          </span>
        </a>
      ) : (
        <span className="xl:text-2xl hover:underline underline-offset-8">
          {props.description}
        </span>
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
