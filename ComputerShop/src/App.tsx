import { useReducer, useRef, useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import cartReducer from "./state-management/reducers/cartReducer";

interface itemsInTheCart {
  id: number;
  name: string;
  price: number;
  image: string;
}

const App = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [items, setItems] = useState(0);
  const [value, dispatch] = useReducer(cartReducer, 0);

  const [searchComputers, setSearchComputers] = useState("");

  const [itemsIncart, setItemsInCart] = useState<itemsInTheCart[]>([]);

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

  const handleAddToCart = (computer: itemsInTheCart) => {
    dispatch({ type: "INCREMENT" });
    setItemsInCart([...itemsIncart, computer]);
  };

  console.log(itemsIncart);

  return (
    <>
      {/* main div */}
      <div>
        {/* nav bar div */}
        <div>
          <NavBar
            item={value}
            onSearch={() => console.log("search")}
            searchComputers={searchComputers}
            onChange={handleSearchChange}
            cartItems={itemsIncart}
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
            onAddToCart={handleAddToCart}
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
