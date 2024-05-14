import Typewriter from "typewriter-effect";

const Profile = () => {
  return (
    <section className="mt-24 xl:mt-36 lg:flex justify-center gap-32">
      <picture>
        <img
          src="/IMG_20181224_204539_Bokeh.jpg"
          alt="Sankhojjal Chatterjee"
          className="rounded-full w-30 h-30 md:w-64 md:h-64 xl:w-96 xl:h-96 m-auto"
        />
      </picture>

      <main className="text-textColor text-center mt-8 xl:mt-12">
        <p className="md:font-semibold md:text-xl">Hello i'm</p>
        <p className="font-bold text-xl md:text-5xl md:font-semibold">
          Sankhojjal Chatterjee
        </p>
        <div className="text-l font-medium md:mt-3 md:text-3xl">
          <Typewriter
            options={{
              strings: ["Software Engineer", "Frontend Developer", "React JS"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex  mt-4 xl:mt-10 justify-center gap-5 lg:gap-10">
          <div className="text-nowrap pl-3 lg:pl-0 pr-3 lg:pr-0 h-10 w-42 lg:w-32 pt-1.5 border-2 rounded-3xl hover:border-hoverBackgroundColor">
            Download CV
          </div>
          <div className="text-nowrap pl-3 lg:pl-0 pr-3 lg:pr-0 h-10 w-42 lg:w-32 pt-1.5 border-2 rounded-3xl hover:border-hoverBackgroundColor">
            Contact info
          </div>
        </div>
        <div className="flex justify-center mt-5 gap-5">
          <img
            src="/github.png"
            alt="Sankhojjal github"
            className="w-10 h-10"
          />
          <img
            src="/linkedin-dark.png"
            alt="Sankhojjal Linkedin"
            className="w-10 h-10"
          />
        </div>
      </main>
    </section>
  );
};

export default Profile;
