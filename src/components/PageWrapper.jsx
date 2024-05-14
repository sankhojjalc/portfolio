const PageWrapper = ({ children }) => {
  return (
    <div className="w-10/12 mx-auto z-10 h-screen bg-backgroundColor p-5 lg:p-10">
      {children}
    </div>
  );
};
export default PageWrapper;
