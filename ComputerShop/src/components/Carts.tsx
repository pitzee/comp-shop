import { RiCloseLargeFill } from "react-icons/ri";
interface itemsInTheCart {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface props {
  cartItems: itemsInTheCart[];
  cartVisibility: boolean;
  onCartClose: () => void;
}

const Carts = ({ cartItems, cartVisibility, onCartClose }: props) => {
  const totalprice = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      {cartVisibility && (
        <div className="h-screen fixed w-full bg-white top-0 z-50">
          <div className="flex justify-between">
            <p className="pl-4 text-lg">Shopping Cart</p>
            <div className=" mr-4 text-3xl hover:translate-y-1">
              <RiCloseLargeFill onClick={onCartClose} />
            </div>
          </div>
          <div className="overflow-y-auto h-4/5">
            {cartItems.length === 0 && (
              <p className="flex justify-center">The cart is empty</p>
            )}

            {cartItems.map((items) => (
              <div className="flex justify-between">
                <div
                  key={items.id}
                  className="flex  justify-center items-center space-x-1 ml-4"
                >
                  <img
                    src={items.image}
                    alt=""
                    className="w-20 h-20 object-cover "
                  />

                  <h1>{items.name}</h1>
                </div>
                <div className="flex flex-col justify-center items-center mr-4">
                  <p>${items.price}</p>
                  <p className="text-blue-500">Remove</p>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="flex flex-col justify-center items-center space-y-3">
              <h1>Total: {totalprice}</h1>
              <button className="bg-blue-600 w-52 p-2 rounded-lg">
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Carts;
