import { useEffect } from "react";
import ReactGA from "react-ga4";

import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import AboutWrapper from "./pages/About";
import ExperienceWrapper from "./pages/Experience";
import ContactMe from "./pages/ContactMe";
import { gaTagId } from "./assets/constants";

const App = () => {
  ReactGA.initialize(gaTagId);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.hostname,
      title: "Portfolio Viewed",
    });
  }, []);

  return (
    <PageWrapper>
      <Home />
      <AboutWrapper />
      <ExperienceWrapper />
      <ContactMe />
    </PageWrapper>
  );
};

export default App;
