import { useState } from "react";

import Carousel from "../../components/Carousel";
import CompanyDetailsModal from "../../components/CompanyDetailsModal";
import CompanyLogo from "./CompanyLogo";
import { listOfOrganizations } from "../../assets/constants";

const Company = () => {
  const [companyDetailsKey, setCompanyDetailsKey] = useState(null);

  const activeCompany = listOfOrganizations.find(
    (company) => company.id === companyDetailsKey
  );

  return (
    <div className="relative my-14 md:my-24">
      <Carousel
        ariaLabel="Work experience"
        autoPlayDelay={5000}
        paused={Boolean(activeCompany)}
      >
        {listOfOrganizations.map((item) => (
          <CompanyLogo key={item.id} {...item} onOpen={setCompanyDetailsKey} />
        ))}
      </Carousel>

      <CompanyDetailsModal
        {...activeCompany}
        isModalOpen={Boolean(activeCompany)}
        setCompanyDetailsKey={setCompanyDetailsKey}
      />
    </div>
  );
};
export default Company;
