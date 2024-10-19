interface itemsInTheCart {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface props {
  cartItems: itemsInTheCart[];
}

const Carts = ({ cartItems }: props) => {
  return (
    <>
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 mr-2"
              />
              <div className="flex-1">
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Carts;
