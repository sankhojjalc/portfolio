import PageHOC from "../../components/HOC";
import About from "./About";

const AboutWrapper = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
      <PageHOC
        pageTitle="Get to know more"
        pageName="About Me"
        headingId="about-heading"
      >
        <About />
      </PageHOC>
    </section>
  );
};
export default AboutWrapper;
