import PageHOC from "../../components/HOC";
import About from "./About";

const AboutWrapper = () => {
  return (
    <div id="about">
      <PageHOC pageTitle="Get to know More" pageName="About Me">
        <About />
      </PageHOC>
    </div>
  );
};
export default AboutWrapper;
