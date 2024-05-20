import PageHOC from "../../components/HOC";
import ContactMe from "./ContactMe";

const ContactMeWrapper = () => {
  return (
    <div id="contact-me">
      <PageHOC pageTitle="Get in Touch" pageName="Contact Me">
        <ContactMe />
      </PageHOC>
    </div>
  );
};
export default ContactMeWrapper;
