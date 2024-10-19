import { Computers, computer } from "../products/products";
import { useState } from "react";

interface Props {
  onAddToCart: (computer: computer) => void;
  searchedComputers: string;
}

const Products = ({ onAddToCart, searchedComputers }: Props) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const filteredComputers = Computers.filter((comp: computer) =>
    comp.name.toLowerCase().includes(searchedComputers.toLowerCase())
  );

  const computersToDisplay =
    filteredComputers.length > 0 ? filteredComputers : Computers;
  return (
    <>
      <div className="grid grid-cols-4 mt-20 p-2 border border-solid">
        {computersToDisplay.map((comp: computer) => (
          <div
            className="border border-gray-200"
            key={comp.id}
            onMouseEnter={() => setIsHovered(comp.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img src={comp.image} alt="" className="hover:translate-y-2" />
            <div>
              {isHovered === comp.id && (
                <div
                  className="flex flex-row p-2 justify-between bg-neutral-300 w-full h-10
            
              "
                >
                  {/* cart */}
                  <button onClick={() => onAddToCart(comp)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 hover:bg-yellow-300 hover:rounded-full overflow-visible "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </button>

                  {/* view */}
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6  hover:bg-yellow-300 hover:rounded-full overflow-visible"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>

                  {/* heart */}
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6  hover:bg-yellow-300 hover:rounded-full overflow-visible"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
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
