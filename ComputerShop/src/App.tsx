import { useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const hadleSubscribe = () => {
    setAlert(email);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      {/* main div */}
      <div>
        {/* nav bar div */}
        <div>
          <NavBar />
          {showAlert && (
            <p className="fixed top-1 left-96 transform-translate-x-1/2 bg-green-500 text-white p-2 rounded shadow-lg">
              sucessuflly suscribed with {alert}
            </p>
          )}
        </div>
        <div>
          <Home />
        </div>
        {/* footer section */}
        <div>
          <Footer
            onChange={(e) => setEmail(e.target.value)}
            email={email}
            onSubscribe={hadleSubscribe}
          />
        </div>
      </div>
    </>
  );
};

export default App;
