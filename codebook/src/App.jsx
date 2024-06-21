import { AllRoutes } from "./Routes/AllRoutes";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <div className=" dark:bg-darkbg">
      <Header />
        <AllRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
