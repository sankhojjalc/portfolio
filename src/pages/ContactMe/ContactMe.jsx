import IconDescriptionPair from "./IconDescriptionPair";
import MarqueeIcon from "../../components/Marquee/MarqueIcon";
import { userName } from "../../assets/constants";

const ContactMe = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <>
      <IconDescriptionPair />
      {/*
        The skills strip was an unlabelled div - it now carries a real heading
        so the anchor in the nav points at named, indexable content.
      */}
      <section id="skills" aria-labelledby="skills-heading" className="my-6">
        <h3
          id="skills-heading"
          className="text-center font-bold text-lg md:text-2xl mb-4"
        >
          Skills &amp; Technologies
        </h3>
        <MarqueeIcon />
      </section>
      <footer className="text-center mt-10">
        Copyright &copy; {getCurrentYear} <b>{userName}.</b> All Rights
        Reserved.
      </footer>
    </>
  );
};
export default ContactMe;
