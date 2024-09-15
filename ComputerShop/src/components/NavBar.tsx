import computer from "../assets/images/laptop.png";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between bg-slate-200 ">
        <a href="">
          <img src={computer} alt="" className="w-10 h-10" />
        </a>
        <nav className="flex md:space-x-3">
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
