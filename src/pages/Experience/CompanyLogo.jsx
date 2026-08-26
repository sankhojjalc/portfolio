import { gaEvent } from "../../utils";
import { gaCategories } from "../../assets/constants";

const CompanyLogo = ({
  id,
  name,
  imagePath,
  logoScale = "",
  jobRole,
  yearOfService,
  onOpen,
}) => {
  const handleMouseOver = () => {
    gaEvent({
      category: gaCategories.interactedWithCompanyIcon,
      action: gaCategories.interactedWithCompanyIcon,
      label: name,
    });
  };

  return (
    <div className="text-center">
      <button
        type="button"
        className="group block w-full max-w-[15rem] aspect-square mx-auto rounded-full"
        onClick={() => onOpen(id)}
        onMouseOver={handleMouseOver}
        aria-label={`${name}, ${jobRole}, ${yearOfService}. View details`}
      >
        <div className="relative h-full w-full rounded-full shadow-2xl shadow-black duration-500 [transform-style:preserve-3d] [@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]">
          <img
            className={`h-full w-full object-scale-down px-2 [backface-visibility:hidden] ${logoScale}`}
            src={imagePath}
            alt={name}
          />
          <div className="absolute inset-0 h-full w-full rounded-full bg-textColor/80 px-4 lg:px-6 text-center text-backgroundColor [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h3 className="text-base lg:text-xl lg:font-bold">{jobRole}</h3>
              <p className="text-sm lg:text-base mt-2 lg:mt-3">
                {yearOfService}
              </p>
              <span className="inline-block rounded-md bg-backgroundColor py-1 px-2 text-sm text-textColor mt-4 lg:mt-8">
                Read More
              </span>
            </div>
          </div>
        </div>
      </button>
      <p className="mt-5 text-xl">{name}</p>
    </div>
  );
};
export default CompanyLogo;
