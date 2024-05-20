/**
 *
 * Added this extra component for future.
 *  When company will increase, add a carousal
 * in this component
 */
import { useState } from "react";

import CompanyLogo from "./CompanyLogo";
import { listOfOrganizations } from "../../assets/constants";

const Company = () => {
  const [companyDetailsKey, setCompanyDetailsKey] = useState(null);

  const renderCompanyLogo = listOfOrganizations.map((item) => (
    <CompanyLogo
      key={item.id}
      companyDetailsKey={companyDetailsKey}
      setCompanyDetailsKey={setCompanyDetailsKey}
      {...item}
    />
  ));

  return (
    <div className="md:flex justify-around md:my-32 md:gap-10 xl:gap-20 relative">
      {renderCompanyLogo}
    </div>
  );
};
export default Company;
