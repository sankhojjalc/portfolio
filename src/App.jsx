import { useEffect, lazy, Suspense } from "react";
import ReactGA from "react-ga4";

import PageWrapper from "./components/PageWrapper";
import Header from "./pages/Home/Header";
import Profile from "./pages/Home/Profile";

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
      <Header />
      {/*
        A single <main> holding every content section: the document then has
        exactly one main landmark and one <h1> (the name, in Profile), which is
        what crawlers use to decide what this page is about.
      */}
      <main>
        <Profile />
        <Suspense fallback={<></>}>
          <AboutWrapper />
          <ExperienceWrapper />
          <ContactMe />
        </Suspense>
      </main>
    </PageWrapper>
  );
};

export default App;
