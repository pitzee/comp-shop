import { RiCloseLargeFill } from "react-icons/ri";

interface props {
  pic: string;
  name: string;
  price: number;
  onClose: () => void;
}

const ProductsDetail = ({ pic, name, price, onClose }: props) => {
  return (
    <div className="h-screen  fixed w-full bg-green-400 bg-opacity-60 top-0 z-50 container flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-end text-3xl hover:translate-y-1 ">
          <RiCloseLargeFill onClick={onClose} />
        </div>

        <div>
          <img src={pic} alt="" className="h-96 w-96" />
          <p>{name}</p>
          <p>{price} birr</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
