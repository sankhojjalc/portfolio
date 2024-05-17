const CompanyLogo = ({ name, imagePath, jobRole, yearOfService }) => {
  return (
    <div className="group h-52 md:h-40 lg:h-60 w-52 md:w-40 lg:w-60 rounded-full text-center mx-auto my-20">
      <div className="relative h-full w-full rounded-full shadow-2xl duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <img
          className="h-full w-full rounded-full object-scale-down px-2 border-[3.5px] cursor-pointer"
          src={imagePath}
          alt={name}
        />
        <div className="absolute inset-0 h-full w-full rounded-full bg-textColor/80 px-12 text-center text-backgroundColor [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-xl font-bold">{jobRole}</h1>
            <p className="text-base mt-3 w-max">{yearOfService}</p>
            <button className="rounded-md bg-backgroundColor py-1 px-2 text-sm text-textColor mt-8">
              Read More
            </button>
          </div>
        </div>
      </div>
      <p className="mt-5 text-xl">{name}</p>
    </div>
  );
};
export default CompanyLogo;
