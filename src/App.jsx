import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import AboutWrapper from "./pages/About";
import ExperienceWrapper from "./pages/Experience";

const App = () => {
  return (
    <PageWrapper>
      <Home />
      <AboutWrapper />
      <ExperienceWrapper />
    </PageWrapper>
  );
};

export default App;
