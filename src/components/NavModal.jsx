import scrollTo from "gatsby-plugin-smoothscroll";
import LightDarkMode from "../components/LightDarkMode";
import { navLinksMobile } from "../assets/constants";
import { gaEvent } from "../utils";

const NavModal = ({ show }) => {
  return (
    <dialog
      open={show}
      className="absolute bg-backgroundColor left-auto top-8 md:top-12 w-36 md:w-40 text-lg z-10 shadow-textColor shadow-2xl rounded-xl h-44"
    >
      <ul className="pl-6 text-textColor">
        {navLinksMobile.map((link) => (
          <li
            key={link.id}
            className="my-[4px]"
            onClick={() => {
              gaEvent({
                category: link.category,
                action: link.action,
                label: link.name,
              });
              scrollTo(link.path);
            }}
          >
            {link.name}
          </li>
        ))}
      </ul>
      <div className="flex justify-center my-4">
        <LightDarkMode />
      </div>
    </dialog>
  );
};
export default NavModal;
