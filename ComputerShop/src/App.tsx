import { useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  const [email, setEmail] = useState("");

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
          <Footer
            onSubscribe={() => {
              setEmail("peter");
            }}
          />
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};

export default App;
