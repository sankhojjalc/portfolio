import scrollTo from "gatsby-plugin-smoothscroll";
import LightDarkMode from "../components/LightDarkMode";

const NavModal = ({ show }) => {
  return (
    <dialog
      open={show}
      className="absolute bg-backgroundColor left-auto top-8 md:top-12 w-36 md:w-40 text-lg z-10 shadow-textColor shadow-2xl rounded-xl h-40"
    >
      <ul className="pl-6 text-textColor">
        <li className="my-2" onClick={() => scrollTo("#about")}>
          About
        </li>
        <li className="my-2" onClick={() => scrollTo("#experience")}>
          Experience
        </li>
        <li className="my-2" onClick={() => scrollTo("#contact-me")}>
          Contact Me
        </li>
      </ul>
      <div className="flex justify-center my-4">
        <LightDarkMode />
      </div>
    </dialog>
  );
};
export default NavModal;
