import { Link } from "react-router-dom";
import computer from "../assets/images/laptop.png";
import { CiShoppingCart } from "react-icons/ci";

interface Props {
  item: number;
  onSearch: () => void;
  searchComputers: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCartClick: () => void;
}

const NavBar = ({
  item,
  onSearch,
  searchComputers,
  onChange,
  onCartClick,
}: Props) => {
  return (
    <>
      {/* main div */}

      <div className="fixed flex-col space-y-2 md:flex-row  top-0 w-full md:flex md:justify-between  bg-slate-200 z-50">
        {/* home icon */}

        <Link to="/Home" className="pl-2">
          <img src={computer} alt="" className="w-10 h-10" />
        </Link>

        {/* menu items */}

        <nav className="flex flex-col md:space-x-3 items-center pr-2 md:flex-row">
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

          <div className="flex flex-col items-center">
            <CiShoppingCart
              className="text-4xl hover:translate-y-1 "
              onClick={onCartClick}
            />
            <div className="-mt-4 text-sm rounded-full bg-yellow-300 flex justify-center w-5 ml-6 ">
              <p>{item}</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
