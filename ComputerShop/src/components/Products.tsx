import { Computers, computer } from "../products/products";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import ProductsDetail from "./ProductsDetail";

interface Props {
  onAddToCart: (computer: computer) => void;
  searchedComputers: string;
  onDisplayProductDetail: (computer: computer) => void;
  productDetail: boolean;
}

const Products = ({
  onAddToCart,
  searchedComputers,
  onDisplayProductDetail,
  productDetail,
}: Props) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const filteredComputers = Computers.filter((comp: computer) =>
    comp.name.toLowerCase().includes(searchedComputers.toLowerCase())
  );

  const computersToDisplay =
    filteredComputers.length > 0 ? filteredComputers : Computers;
  return (
    <>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 mt-20 p-2 border border-solid">
        {computersToDisplay.map((comp: computer) => (
          <div
            className="border border-gray-200"
            key={comp.id}
            onMouseEnter={() => setIsHovered(comp.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img src={comp.image} alt="" className="hover:translate-y-1" />
            <div>
              {isHovered === comp.id && (
                <div
                  className="flex flex-row p-2 justify-between bg-neutral-300 w-full h-10 transition duration-500 hover:bg-neutral-400
            
              "
                >
                  {/* cart */}
                  <button onClick={() => onAddToCart(comp)}>
                    <CiShoppingCart className="size-6 hover:bg-yellow-300 hover:rounded-full overflow-visible " />
                  </button>

                  {/* detail */}
                  <button>
                    <IoEyeOutline
                      className="size-6 hover:bg-yellow-300 hover:rounded-full "
                      onClick={() => onDisplayProductDetail(comp)}
                    />
                  </button>

                  {/* heart */}
                  <button>
                    <FcLike className="size-6 hover:bg-yellow-300 hover:rounded-full" />
                  </button>
                </div>
              )}
            </div>
            <p className="p-2  text-blue-600 ">{comp.name}</p>
            <p className="p-2  text-red-600">{comp.price} birr</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
