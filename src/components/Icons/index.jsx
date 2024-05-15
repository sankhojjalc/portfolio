import { iconPath, iconStyles } from "./iconsUtils";

const Icon = ({ iconName, fillStyle }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillStyle ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconStyles[`${iconName}Style`]}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={iconPath[iconName]}
      />
    </svg>
  );
};

export default Icon;
