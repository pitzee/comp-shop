import { Link } from "react-router-dom";
import computer from "../assets/images/laptop.png";

const NavBar = () => {
  return (
    <>
      {/* main div */}

      <div className="flex flex-col md:flex-row md:justify-between bg-slate-200 ">
        {/* home icon */}

        <Link to="/Home" className="pl-2">
          <img src={computer} alt="" className="w-10 h-10" />
        </Link>

        {/* menu items */}

        <nav className="flex md:space-x-3 items-center pr-2">
          {/* search  */}
          <div>
            <input type="text" className="p-2 rounded-l-md border-2" />
            <button className="rounded-r-md bg-green-500 p-2 ">Search</button>
          </div>
          <Link to="/Home" className="text-lg font-bold  hover:text-purple-500">
            Home
          </Link>

          <Link
            to="/Products"
            className="text-lg font-bold hover:text-purple-500"
          >
            Products
          </Link>

          <Link
            to="/Aboutus"
            className="text-lg font-bold hover:text-purple-500"
          >
            AboutUs
          </Link>

          <Link to="" className="text-lg font-bold hover:text-purple-500">
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
