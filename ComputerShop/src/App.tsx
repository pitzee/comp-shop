import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      {/* main div */}
      <div>
        {/* nav bar div */}
        <div>
          <NavBar />
        </div>
        <div>
          <Home />
        </div>
        {/* footer section */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
