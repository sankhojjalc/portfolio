import { useEffect } from "react";

import Icon from "../components/Icons";

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
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  return (
    <div className={`fixed inset-48 z-10 ${isModalOpen ? "block" : "hidden"}`}>
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
              <div>
                <span className="text-3xl">{name}</span>
                <span className="mr-4 italic text-lg pl-3">({jobRole})</span>
              </div>
              <span
                className="cursor-pointer hover:text-gray-500"
                onClick={() => setCompanyDetailsKey(null)}
              >
                <Icon iconName="closeIcon" />
              </span>
            </div>

            <span className="text-lg underline underline-offset-2">
              ({yearOfService})
            </span>
            <div>
              <ul className="my-6">
                {tasks.map((item, index) => (
                  <li
                    key={index}
                    className="list-disc my-2 tracking-wider ml-3"
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
