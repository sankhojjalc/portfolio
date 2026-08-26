import PageHOC from "../../components/HOC";
import ContactMe from "./ContactMe";

const ContactMeWrapper = () => {
  return (
    <section id="contact-me" aria-labelledby="contact-heading">
      <PageHOC
        pageTitle="Get in Touch"
        pageName="Contact Me"
        headingId="contact-heading"
      >
        <ContactMe />
      </PageHOC>
    </section>
  );
};
export default ContactMeWrapper;
