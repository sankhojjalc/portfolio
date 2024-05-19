import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import AboutWrapper from "./pages/About";
import ExperienceWrapper from "./pages/Experience";
import SkillWrapper from "./pages/Skills";

const App = () => {
  return (
    <PageWrapper>
      <Home />
      <AboutWrapper />
      <ExperienceWrapper />
      <SkillWrapper />
    </PageWrapper>
  );
};

export default App;
