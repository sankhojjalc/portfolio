const PageHOC = ({ pageTitle, pageName, headingId, children }) => {
  return (
    <div className="mt-28 lg:mt-64 xl:mt-[400px] text-textColor">
      <div className="text-center">
        <p className="md:font-normal md:text-lg">{pageTitle}</p>
        {/*
          Section names are real <h2>s so the document has a crawlable outline
          (h1 = name, h2 = About Me / Work Experience / Contact Me).
        */}
        <h2
          id={headingId}
          className="font-bold text-xl md:text-5xl md:font-semibold"
        >
          {pageName}
        </h2>
      </div>
      <>{children}</>
    </div>
  );
};

export default PageHOC;
