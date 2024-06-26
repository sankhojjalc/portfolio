import ReactGA from "react-ga4";
import { gaTagId } from "../assets/constants";

export const getDateDifference = () => {
  const startDate = new Date("2017-01-08");
  const todaysDate = new Date();

  let years = todaysDate.getFullYear() - startDate.getFullYear();
  let months = todaysDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let yearMonthDifference = `${years}.${months}`;

  return yearMonthDifference;
};

export const gaEvent = ({ category, action, label }) => {
  ReactGA.initialize(gaTagId);
  ReactGA.event({
    category,
    action,
    label,
  });
};
