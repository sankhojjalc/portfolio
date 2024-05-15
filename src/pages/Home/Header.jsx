import { useState } from "react";

import Icon from "../../components/Icons";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { userName, navLinks } from "../../assets/constants";

const NavLinks = ({ navLinks }) =>
  navLinks.map((link) => (
    <li
      key={link}
      className="hover:bg-hoverBackgroundColor rounded-3xl px-3 cursor-pointer"
    >
      {link}
    </li>
  ));

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [theme, toggleTheme] = useLocalStorage();

  return (
    <header className="h-15 flex text-textColor justify-between">
      <div className="md:text-3xl lg:w-5/12">{userName}</div>
      <nav className="hidden lg:block xl:w-5/12">
        <ul className="flex text-2xl justify-between leading-10">
          <NavLinks navLinks={navLinks} />
        </ul>
      </nav>
      <div className="lg:hidden" onClick={() => setToggleIcon((prev) => !prev)}>
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
