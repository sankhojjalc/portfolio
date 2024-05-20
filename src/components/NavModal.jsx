import scrollTo from "gatsby-plugin-smoothscroll";

const NavModal = ({ show }) => {
  return (
    <dialog
      open={show}
      className="absolute bg-backgroundColor left-auto top-8 md:top-12 w-36 md:w-52 text-lg z-10 shadow-textColor shadow-2xl pl-6 rounded-xl h-28 open:animate-modal"
    >
      <ul>
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
    </dialog>
  );
};
export default NavModal;
