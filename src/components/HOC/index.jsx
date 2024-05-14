const PageHOC = ({ pageTitle, pageName, children }) => {
  return (
    <>
      <div>{pageTitle}</div>
      <div>{pageName}</div>
      <div>{children}</div>
    </>
  );
};

export default PageHOC;
