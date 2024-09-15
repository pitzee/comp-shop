import computer from "../assets/images/laptop.png";

const NavBar = () => {
  return (
    <>
      {/* main div */}

      <div className="flex flex-col md:flex-row md:justify-between bg-slate-200 ">
        {/* home icon */}

        <a href="" className="pl-2">
          <img src={computer} alt="" className="w-10 h-10" />
        </a>
        {/* search  */}
        <div>
          <input type="text" className="p-2 rounded-l-md border-2" />
          <button className="rounded-r-md bg-green-500 p-2 ">Search</button>
        </div>

        {/* menu items */}

        <nav className="flex md:space-x-3 items-center pr-2">
          <a href="#" className="text-lg font-bold  hover:text-purple-500">
            HOME
          </a>
          <a href="#" className="text-lg font-bold hover:text-purple-500">
            Products
          </a>
          <a href="#" className="text-lg font-bold hover:text-purple-500">
            Aboutus
          </a>
          <a href="#" className="text-lg font-bold hover:text-purple-500">
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
