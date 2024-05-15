import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import AboutWrapper from "./pages/About";

const App = () => {
  return (
    <PageWrapper>
      <Home />
      <AboutWrapper />
    </PageWrapper>
  );
};

export default App;
