import IconDescriptionPair from "./IconDescriptionPair";
import Skill from "../Skills/Skill";
const ContactMe = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <>
      <IconDescriptionPair />
      <div id="skills" className="mt-10 mb-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] overflow-hidden">
        <Skill />
      </div>
      <div className="text-center mt-10">
        Copyright © {getCurrentYear} Sankhojjal Chatterjee. All Rights Reserved.
      </div>
    </>
  );
};
export default ContactMe;
