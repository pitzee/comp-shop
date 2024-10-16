import { Link } from "react-router-dom";
import computer from "../assets/images/laptop.png";
import Carts from "./Carts";

interface Props {
  item: number;
  onSearch: () => void;
  searchComputers: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

          <Carts items={item} />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
