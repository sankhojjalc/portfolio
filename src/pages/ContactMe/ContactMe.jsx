import IconDescriptionPair from "./IconDescriptionPair";
import MarqueeIcon from "../../components/Marquee/MarqueIcon";

const ContactMe = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <>
      <IconDescriptionPair />
      <div className="hidden lg:block" id="skills">
        <MarqueeIcon />
      </div>
      <div className="text-center mt-10">
        Copyright © {getCurrentYear} <b>Sankhojjal Chatterjee.</b> All Rights
        Reserved.
      </div>
    </>
  );
};
export default ContactMe;
