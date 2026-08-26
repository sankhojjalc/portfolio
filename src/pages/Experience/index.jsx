import PageHOC from "../../components/HOC";
import Experience from "./Experience";

const ExperienceWrapper = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <PageHOC
        pageTitle="Explore my"
        pageName="Work Experience"
        headingId="experience-heading"
      >
        <Experience />
      </PageHOC>
    </section>
  );
};

export default ExperienceWrapper;
