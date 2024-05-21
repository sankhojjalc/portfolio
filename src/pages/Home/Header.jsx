import { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import Icon from "../../components/Icons";
import NavModal from "../../components/NavModal";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { userName, navLinks } from "../../assets/constants";
import { gaEvent } from "../../utils";

const NavLinks = ({ navLinks }) =>
  navLinks.map((link) => (
    <li
      key={link.name}
      className="hover:bg-hoverBackgroundColor hover:text-black rounded-3xl px-3 cursor-pointer"
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
  ));

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [theme, toggleTheme] = useLocalStorage();

  return (
    <header className="h-15 flex text-textColor justify-between">
      <div className="text-2xl md:text-3xl lg:w-5/12">{userName}</div>
      <nav className="hidden lg:block xl:w-5/12">
        <ul className="flex text-2xl justify-between leading-10">
          <NavLinks navLinks={navLinks} />
        </ul>
      </nav>
      <div
        className="relative lg:hidden"
        onClick={() => setToggleIcon((prev) => !prev)}
      >
        <NavModal show={toggleIcon} />
        {toggleIcon ? (
          <Icon iconName="closeIcon" />
        ) : (
          <Icon iconName="hamburgerIcon" />
        )}
      </div>

      <div
        className="hidden lg:block lg:pt-2 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <Icon iconName="moonIcon" fillStyle />
        ) : (
          <Icon iconName="sunIcon" fillStyle />
        )}
      </div>
    </header>
  );
};

export default Header;
