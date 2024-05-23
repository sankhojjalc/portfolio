import { useEffect } from "react";

import Icon from "../components/Icons";
import { gaEvent } from "../utils/index";
import { gaCategories } from "../assets/constants";

const CompanyDetailsModal = ({
  name,
  isModalOpen,
  yearOfService,
  tasks,
  jobRole,
  setCompanyDetailsKey,
}) => {
  useEffect(() => {
    if (isModalOpen) {
      gaEvent({
        category: gaCategories.companyModalViewed,
        action: gaCategories.companyModalViewed,
        label: name,
      });
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  return (
    <div
      className={`fixed inset-10 lg:inset-36 z-10 ${
        isModalOpen ? "block" : "hidden"
      } shadow-2xl cursor-default`}
    >
      <div className="backdrop fixed inset-0 bg-textColor bg-opacity-70 transition-opacity duration-300">
        <div className="fixed inset-0 filter blur-sm"></div>
      </div>
      <div className="modal-content relative z-20">
        <dialog
          open={isModalOpen}
          className="xl:w-[700px] h-max absolute bg-backgroundColor z-50 border rounded-3xl shadow-textColor shadow-2xl text-textColor"
        >
          <div className="p-5">
            <div className="flex justify-between">
              <div className="md:flex gap-2 max-[320px]:mr-4">
                <p className="text-xl md:text-3xl">{name}</p>
                <p className="min-[425px]:mr-4 italic lg:text-lg min-[425px]:pt-2 w-max">
                  ({jobRole})
                </p>
              </div>
              <span
                className="cursor-pointer hover:text-gray-500"
                onClick={() => setCompanyDetailsKey(null)}
              >
                <Icon iconName="closeIcon" />
              </span>
            </div>

            <span className="text-lg underline underline-offset-4">
              ({yearOfService})
            </span>
            <div>
              <ul className="my-6">
                {tasks.map((item, index) => (
                  <li
                    key={index}
                    className="list-disc min-[375px]:my-2 text-sm md:text-lg ml-3 text-justify"
                  >
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
