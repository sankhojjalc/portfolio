import { useCallback, useEffect } from "react";

import Icon from "../components/Icons";
import { gaEvent } from "../utils/index";
import { gaCategories } from "../assets/constants";

const CompanyDetailsModal = ({
  name = "",
  isModalOpen,
  yearOfService = "",
  tasks = [],
  jobRole = "",
  setCompanyDetailsKey,
}) => {
  const closeModal = useCallback(
    () => setCompanyDetailsKey(null),
    [setCompanyDetailsKey]
  );

  useEffect(() => {
    if (!isModalOpen) {
      document.body.classList.remove("overflow-hidden");
      return;
    }

    gaEvent({
      category: gaCategories.companyModalViewed,
      action: gaCategories.companyModalViewed,
      label: name,
    });
    document.body.classList.add("overflow-hidden");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen, name, closeModal]);

  return (
    <div
      className={`fixed inset-0 z-10 ${
        isModalOpen ? "block" : "hidden"
      } cursor-default`}
    >
      <div
        className="backdrop fixed inset-0 bg-textColor bg-opacity-70 transition-opacity duration-300"
        onClick={closeModal}
      ></div>
      <div className="modal-content relative z-20 flex min-h-full items-center justify-center max-[320px]:p-2 p-5 lg:p-10">
        <dialog
          open={isModalOpen}
          className="static w-full xl:w-[700px] max-h-[80vh] overflow-y-auto bg-backgroundColor z-50 border rounded-3xl shadow-textColor shadow-2xl text-textColor"
        >
          <div className="p-5">
            <div className="flex justify-between">
              <div className="md:flex gap-2 max-[320px]:mr-4">
                <p className="text-xl md:text-3xl">{name}</p>
                <p className="mr-4 italic lg:text-lg pt-2">({jobRole})</p>
              </div>
              <button
                type="button"
                className="cursor-pointer hover:text-gray-500"
                onClick={closeModal}
                aria-label="Close company details"
              >
                <Icon iconName="closeIcon" />
              </button>
            </div>

            <span className="text-lg underline underline-offset-4">
              ({yearOfService})
            </span>
            <div>
              <ul className="my-6 ">
                {tasks.map((item, index) => (
                  <li key={index} className="text-sm md:text-lg lg:mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};
export default CompanyDetailsModal;
