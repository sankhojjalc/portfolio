import Icon from "./Icons";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LightDarkMode = () => {
  const [theme, toggleTheme] = useLocalStorage();

  return (
    <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center pl-1">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
        className="sr-only"
      />
      <Icon iconName="moonIconMobile" fillStyle />
      <span
        className={`slider mx-4 flex h-6 w-[40px] items-center rounded-full p-1 duration-200 ${
          theme === "light" ? "bg-[#CCCCCE]" : "bg-[#212b36]"
        }`}
      >
        <span
          className={`dot h-4 w-4 rounded-full bg-white duration-200 ${
            theme === "light" ? "translate-x-[16px]" : ""
          }`}
        ></span>
      </span>
      <Icon iconName="sunIcon" fillStyle />
    </label>
  );
};
export default LightDarkMode;
