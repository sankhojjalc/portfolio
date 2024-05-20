import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import AboutWrapper from "./pages/About";
import ExperienceWrapper from "./pages/Experience";
import SkillWrapper from "./pages/Skills";
import ContactMe from "./pages/ContactMe";

const App = () => {
  return (
    <PageWrapper>
      <Home />
      <AboutWrapper />
      <ExperienceWrapper />
      <ContactMe />
      {/* <SkillWrapper /> */}
    </PageWrapper>
  );
};

export default App;
