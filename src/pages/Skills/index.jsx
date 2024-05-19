import PageHOC from "../../components/HOC";
import Skill from "./Skill";

const SkillWrapper = () => {
  return (
    <div
      id="skills"
      className="overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <PageHOC pageTitle="I have worked with following" pageName="Technologies">
        <Skill />
      </PageHOC>
    </div>
  );
};

export default SkillWrapper;
