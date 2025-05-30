import CompanyDetailsModal from "../../components/CompanyDetailsModal";
import { gaEvent } from "../../utils";
import { gaCategories } from "../../assets/constants";

const CompanyLogo = ({
  id,
  name,
  imagePath,
  jobRole,
  yearOfService,
  companyDetailsKey,
  tasks,
  setCompanyDetailsKey,
}) => {
  const handleMouseOver = (name) => {
    gaEvent({
      category: gaCategories.interactedWithCompanyIcon,
      action: gaCategories.interactedWithCompanyIcon,
      label: name,
    });
  };
  return (
    <>
      <div className="group h-52 md:h-28 lg:h-44 xl:h-60 w-52 md:w-28 lg:w-44 xl:w-60 rounded-full text-center mx-auto my-20">
        <div className="relative h-full w-full rounded-full shadow-2xl shadow-black duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <img
            className={`h-full w-full object-scale-down px-2 cursor-pointer ${
              name === "Sber Bank" ? "scale-[0.7]" : ""
            }`}
            src={imagePath}
            alt={name}
            onMouseOver={() => handleMouseOver(name)}
          />
          <div className="absolute inset-0 h-full w-full rounded-full bg-textColor/80 px-12 text-center text-backgroundColor [transform:rotateY(180deg)] [backface-visibility:hidden] cursor-default">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-xl lg:font-bold pt-1">{jobRole}</h1>
              <p className="text-base md:text-sm lg:text-base mt-3 md:mt-1 lg:mt-3 w-max">
                {yearOfService}
              </p>
              <button
                className="rounded-md bg-backgroundColor py-1 px-2 text-sm text-textColor mt-8 md:mt-2 lg:mt-8 md:max-lg:w-max"
                onClick={() => setCompanyDetailsKey(id)}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <p className="mt-5 text-xl">{name}</p>
      </div>

      <CompanyDetailsModal
        name={name}
        isModalOpen={companyDetailsKey === id}
        yearOfService={yearOfService}
        tasks={tasks}
        jobRole={jobRole}
        setCompanyDetailsKey={setCompanyDetailsKey}
      />
    </>
  );
};
export default CompanyLogo;
