import Icons from "../../components/Icons";

const Cards = ({ iconName, cardTitle, textOne, textTwo }) => {
  return (
    <div className="md:w-[350px] h-40 border-[3px] hover:border-hoverBackgroundColor rounded-3xl">
      <div className="mx-auto w-fit text-center py-7">
        <Icons iconName={iconName} />
        <p className="font-bold text-lg tracking-wider">{cardTitle}</p>
        <p>{textOne}</p>
        <p className="tracking-wider">{textTwo}</p>
      </div>
    </div>
  );
};
export default Cards;
