import Typewriter from "typewriter-effect";
import scrollTo from "gatsby-plugin-smoothscroll";
import { gaEvent } from "../../utils";
import BlurryLoadingImage from "../../components/BlurryLoadingImage";

import {
  userName,
  greetings,
  downloadCV,
  contactInfo,
  linkedInUrl,
  githubUrl,
  gaCategories,
  designations,
} from "../../assets/constants";

const Profile = () => {
  return (
    <section className="mt-24 xl:mt-36 lg:flex justify-center gap-32">
      <div className="w-60 h-60 md:w-64 md:h-64 xl:w-96 xl:h-96 m-auto">
        <BlurryLoadingImage
          preview="/IMG_20181224_204539_Bokeh-compressed.jpg"
          image="/IMG_20181224_204539_Bokeh.jpg"
          alt="Sankhojjal Chatterjee"
          divStyleClass="rounded-full w-30 h-30 md:w-64 md:h-64 xl:w-96 xl:h-96 m-auto"
          imageStyleClass="rounded-full w-30 h-30 md:w-64 md:h-64 xl:w-96 xl:h-96 m-auto"
        />
      </div>
      <main className="text-textColor text-center mt-8 xl:mt-12">
        <p className="md:font-semibold md:text-xl">{greetings}</p>
        <p className="font-bold text-xl md:text-5xl md:font-semibold">
          {userName}
        </p>
        <div className="text-l font-medium md:mt-3 md:text-3xl">
          <Typewriter
            options={{
              strings: designations,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex  mt-4 xl:mt-10 justify-center gap-5 lg:gap-10">
          <div
            className="text-nowrap pl-3 lg:pl-0 pr-3 lg:pr-0 h-10 w-42 lg:w-32 pt-1.5 border-2 rounded-3xl hover:border-hoverBackgroundColor cursor-pointer"
            onClick={() => {
              gaEvent({
                category: gaCategories.viewResume,
                action: "Clicked Resume Button",
                label: downloadCV,
              });
            }}
          >
            <a
              href="https://sankhojjal-chatterjee-resume.tiiny.site"
              target="_blank"
              download
            >
              {downloadCV}
            </a>
          </div>
          <div
            className="text-nowrap pl-3 lg:pl-0 pr-3 lg:pr-0 h-10 w-42 lg:w-32 pt-1.5 border-2 rounded-3xl hover:border-hoverBackgroundColor cursor-pointer"
            onClick={() => scrollTo("#contact-me")}
          >
            {contactInfo}
          </div>
        </div>
        <div className="flex justify-center mt-5 gap-5">
          <div
            onClick={() =>
              gaEvent({
                category: gaCategories.viewGithub,
                action: gaCategories.viewGithub,
                label: gaCategories.viewGithub,
              })
            }
          >
            <a href={githubUrl} target="_blank">
              <img
                src="/github.png"
                alt={userName + " github"}
                className="w-10 h-10 bg-white rounded-full cursor-pointer"
              />
            </a>
          </div>
          <div
            onClick={() =>
              gaEvent({
                category: gaCategories.viewLinkedIn,
                action: gaCategories.viewLinkedin,
                label: gaCategories.viewLinkedIn,
              })
            }
          >
            <a href={linkedInUrl} target="_blank">
              <img
                src="/linkedin-dark.png"
                alt={userName + " linkedIn"}
                className="w-10 h-10 bg-white rounded-full cursor-pointer"
              />
            </a>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Profile;
