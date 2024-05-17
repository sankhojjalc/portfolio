import PageHOC from "../../components/HOC";
import Experience from "./Experience";

const ExperienceWrapper = () => {
  return (
    <div id="experience">
      <PageHOC pageTitle="Explore my" pageName="Experience">
        <Experience />
      </PageHOC>
    </div>
  );
};

export default ExperienceWrapper;
