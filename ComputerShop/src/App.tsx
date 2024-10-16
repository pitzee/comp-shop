import { useRef, useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

const App = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [items, setItems] = useState(0);
  const [searchComputers, setSearchComputers] = useState("");

  const productsRef = useRef<HTMLDivElement>(null);

  const hadleSubscribe = () => {
    setAlert(email);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleSearchChange = (e) => {
    setSearchComputers(e.target.value);

    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* main div */}
      <div>
        {/* nav bar div */}
        <div>
          <NavBar
            item={items}
            onSearch={() => console.log("search")}
            searchComputers={searchComputers}
            onChange={handleSearchChange}
          />
          {showAlert && (
            <p className="fixed top-1 left-96 transform-translate-x-1/2 bg-green-500 text-white p-2 rounded shadow-lg">
              sucessuflly suscribed with {alert}
            </p>
          )}
        </div>

        <div>
          <Home />
        </div>

        {/* product section */}
        <div ref={productsRef}>
          <Products
            onAddToCart={() => {
              setItems(items + 1);
            }}
            searchedComputers={searchComputers}
          />
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
