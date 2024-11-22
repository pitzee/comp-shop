import { useReducer, useRef, useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import cartReducer from "./state-management/reducers/cartReducer";
import Carts from "./components/Carts";
import { computer } from "./products/products";
import ProductsDetail from "./components/ProductsDetail";

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

  const [value, dispatch] = useReducer(cartReducer, 0);

  const [searchComputers, setSearchComputers] = useState("");

  const [itemsIncart, setItemsInCart] = useState<itemsInTheCart[]>([]);

  const productsRef = useRef<HTMLDivElement>(null);

  const [cartVisibility, setCartVIsibility] = useState(false);

  const [CheckoutAlert, setCheckoutAlert] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<computer | false>(
    false
  );

  const executeWithDelay = (callback: () => void, delay = 2000) => {
    setTimeout(callback, delay);
  };

  const onCheckout = () => {
    setItemsInCart([]);
    dispatch({ type: "CLEAR" });
    setCheckoutAlert(true);
    executeWithDelay(() => {
      setCheckoutAlert(false);
    });
  };

  const onItemRemoval = (id: number) => {
    setItemsInCart(itemsIncart.filter((item) => item.id !== id));
    dispatch({ type: "DECREMENT" });
  };

  const hadleSubscribe = () => {
    setAlert(email);
    setShowAlert(true);
    executeWithDelay(() => {
      setShowAlert(false);
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchComputers(e.target.value);

    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = (computer: itemsInTheCart) => {
    dispatch({ type: "INCREMENT" });
    setItemsInCart([...itemsIncart, computer]);
  };

  const handleDisplayProductDetail = (computer: computer) => {
    setSelectedProduct(computer);
  };

  return (
    <main>
      {/* nav bar div */}
      <div>
        <NavBar
          item={value}
          onSearch={() => console.log("search")}
          searchComputers={searchComputers}
          onChange={handleSearchChange}
          onCartClick={() => setCartVIsibility(true)}
        />
        {showAlert && (
          <p className="fixed top-1 md:left-96 transform-translate-x-1/2 bg-green-500 text-white p-2 rounded shadow-lg z-50">
            sucessuflly suscribed with {alert}
          </p>
        )}
      </div>
      <div>
        <Carts
          cartItems={itemsIncart}
          cartVisibility={cartVisibility}
          onCartClose={() => setCartVIsibility(false)}
          onItemRemoval={onItemRemoval}
          onCheckout={onCheckout}
          checkOutAlert={CheckoutAlert}
        />
      </div>
      <div>
        <Home />
      </div>
      {/* product section */}
      <div ref={productsRef}>
        <Products
          onAddToCart={handleAddToCart}
          searchedComputers={searchComputers}
          onDisplayProductDetail={handleDisplayProductDetail}
        />
      </div>
      {/* Conditionally render product detail */}{" "}
      {selectedProduct && (
        <ProductsDetail
          onClose={() => setSelectedProduct(false)}
          pic={selectedProduct.image}
          name={selectedProduct.name}
          price={selectedProduct.price}
        />
      )}
      {/* footer section */}
      <div>
        <Footer
          onChange={(e) => setEmail(e.target.value)}
          email={email}
          onSubscribe={hadleSubscribe}
        />
      </div>
    </main>
  );
};

export default App;
