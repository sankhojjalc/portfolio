import Icon from "../components/Icons";
const CompanyDetailsModal = ({
  name,
  isModalOpen,
  yearOfService,
  tasks,
  jobRole,
  setCompanyDetailsKey,
}) => {
  return (
    <dialog
      open={isModalOpen}
      className="xl:w-[700px] h-max absolute bg-backgroundColor z-20 border rounded-3xl shadow-textColor shadow-2xl text-textColor"
    >
      <div className="p-5">
        <div className="flex justify-between">
          <div>
            <span className="text-3xl underline underline-offset-2">{name}</span>
            <span className="text-xl pt-1 pl-3">({yearOfService})</span>
          </div>
          <span onClick={() => setCompanyDetailsKey(null)}>
            <Icon iconName="closeIcon" />
          </span>
        </div>
        <span className="mr-4 italic text-lg">({jobRole})</span>

        <div>
          <ul className="my-6">
            {tasks.map((item, index) => (
              <li key={index} className="list-disc my-2 tracking-wider">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </dialog>
  );
};
export default CompanyDetailsModal;
