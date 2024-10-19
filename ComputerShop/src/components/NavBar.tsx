import { Link } from "react-router-dom";
import computer from "../assets/images/laptop.png";

interface itemsInTheCart {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Props {
  item: number;
  onSearch: () => void;
  searchComputers: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cartItems: itemsInTheCart[];
}

const NavBar = ({ item, onSearch, searchComputers, onChange }: Props) => {
  return (
    <>
      {/* main div */}

      <div className="fixed top-0 w-full flex flex-col md:flex-row md:justify-between bg-slate-200">
        {/* home icon */}

        <Link to="/Home" className="pl-2">
          <img src={computer} alt="" className="w-10 h-10" />
        </Link>

        {/* menu items */}

        <nav className="flex md:space-x-3 items-center pr-2">
          {/* search  */}
          <div>
            <input
              type="text"
              className="p-2 rounded-l-md border-2"
              placeholder="Search For computer"
              value={searchComputers}
              onChange={onChange}
            />
            <button
              onClick={onSearch}
              className="rounded-r-md bg-green-500 p-2 "
            >
              Search
            </button>
          </div>
          <Link to="/Home" className="text-lg font-bold  hover:text-purple-500">
            Home
          </Link>

          <Link
            to="/Aboutus"
            className="text-lg font-bold hover:text-purple-500"
          >
            AboutUs
          </Link>

          <Link to="/Cart">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <div className="-mt-4 text-sm rounded-full bg-yellow-300 flex justify-center w-5">
                <p>{item}</p>
              </div>
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
