import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import AboutWrapper from "./pages/About";

const App = () => {
  return (
    <PageWrapper>
      <Home />
      <AboutWrapper />
    </PageWrapper>
  );
};

// function App() {
//   return (
//     <h1 className="text-3xl font-bold underline bg-backgroundColor text-textColor">
//       Hello world!
//     </h1>
//   );
// }

export default App;
