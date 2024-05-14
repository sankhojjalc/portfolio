import PageHOC from "../../components/HOC";
import About from "./About";

const AboutWrapper = () => {
  return (
    <PageHOC pageTitle="Get to know More" pageName="About Me">
      <About />
    </PageHOC>
  );
};
export default AboutWrapper;
