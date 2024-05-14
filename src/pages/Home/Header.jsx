import { useState } from "react";

import { SunIcon } from "../../components/Icons/SunIcon";
import { MoonIcon } from "../../components/Icons/MoonIcon";
import { HamburgerIcon } from "../../components/Icons/HamburgerIcon";
import { CloseIcon } from "../../components/Icons/CloseIcon";

import { useLocalStorage } from "../../hooks/useLocalStorage";

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [theme, toggleTheme] = useLocalStorage();

  return (
    <header className="h-15 flex text-textColor justify-between">
      <div className="md:text-3xl lg:w-5/12">Sankhojjal Chatterjee</div>
      <nav className="hidden lg:block xl:w-5/12">
        <ul className="flex text-2xl justify-between leading-10">
          <li className="hover:bg-hoverBackgroundColor rounded-3xl px-3 cursor-pointer">
            About
          </li>
          <li className="hover:bg-hoverBackgroundColor rounded-3xl px-3 cursor-pointer">
            Experience
          </li>
          <li className="hover:bg-hoverBackgroundColor rounded-3xl px-3 cursor-pointer">
            Projects
          </li>
          <li className="hover:bg-hoverBackgroundColor rounded-3xl px-3 cursor-pointer">
            Contacts
          </li>
        </ul>
      </nav>
      <div className="lg:hidden" onClick={() => setToggleIcon((prev) => !prev)}>
        {toggleIcon ? <CloseIcon /> : <HamburgerIcon />}
      </div>
      <div
        className="hidden lg:block lg:pt-2 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </div>
    </header>
  );
};

export default Header;
