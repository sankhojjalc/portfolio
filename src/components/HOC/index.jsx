const PageHOC = ({ pageTitle, pageName, children }) => {
  return (
    <div className="mt-28 lg:mt-64 xl:mt-[400px] text-textColor">
      <div className="text-center">
        <div className="md:font-normal md:text-lg">{pageTitle}</div>
        <div className="font-bold text-xl md:text-5xl md:font-semibold">
          {pageName}
        </div>
      </div>
      <>{children}</>
    </div>
  );
};

export default PageHOC;
