import { useEffect, lazy, Suspense } from "react";
import ReactGA from "react-ga4";

import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";

const AboutWrapper = lazy(() => import("./pages/About"));
const ExperienceWrapper = lazy(() => import("./pages/Experience"));
const ContactMe = lazy(() => import("./pages/ContactMe"));

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
      <Suspense fallback={<></>}>
        <AboutWrapper />
        <ExperienceWrapper />
        <ContactMe />
      </Suspense>
    </PageWrapper>
  );
};

export default App;
