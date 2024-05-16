import Cards from "./Cards";
const About = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row mt-14 lg:mt-32 justify-center gap-7 lg:gap-16">
          <Cards
            iconName="workIcon"
            cardTitle="Experience"
            textOne="7.6 Years"
            textTwo="Fullstack Developer"
          />
          <Cards
            iconName="academicsIcon"
            cardTitle="Graduation"
            textOne="2016"
            textTwo="B.Tech Engineer"
          />
        </div>
      </div>
      <div className="mt-10 lg:mt-28 lg:text-lg text-justify">
        <div className="lg:tracking-wider">
          Hello, I'm Sankhojjal Chatterjee, a Senior Software Engineer with over
          eight years of experience, specializing in full-stack development with
          a focus on ReactJS and NextJS. I am passionate about building
          innovative projects that serve a broad audience.
        </div>
        <div className="mt-4 tracking-wider">
          I'm committed to continuous learning, whether it's new coding
          languages, library, frameworks, or system design. My core principles include
          innovation, efficiency, and collaboration.
        </div>
        <div className="mt-4 tracking-wider">
          In my free time, I enjoy contributing to open-source projects and
          learning about new technologies. My goal is to create high-quality
          software solutions that exceed user expectations.
        </div>
        <div className="mt-4 tracking-wider">
          Thank you for visiting my portfolio. Let's connect and create
          something amazing together.
        </div>
      </div>
    </>
  );
};

export default About;
