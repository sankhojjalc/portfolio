/**
 *
 * Added this extra component for future.
 *  When company will increase, add a carousal
 * in this component
 */
import CompanyLogo from "./CompanyLogo";
import { listOfOrganizations } from "../../assets/constants";

const Company = () => {
  const renderCompanyLogo = listOfOrganizations.map((item) => (
    <CompanyLogo key={item.yearOfService} {...item} />
  ));
  return (
    <div className="md:flex justify-around md:my-32 md:gap-10 xl:gap-20">
      {renderCompanyLogo}
    </div>
  );
};
export default Company;
