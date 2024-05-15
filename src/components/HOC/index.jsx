const PageHOC = ({ pageTitle, pageName, children }) => {
  return (
    <div className="mt-64 text-textColor">
      <div className="text-center">
        <div className="text-lg">{pageTitle}</div>
        <div className="text-5xl font-bold">{pageName}</div>
      </div>
      <>{children}</>
    </div>
  );
};

export default PageHOC;
