const NavBar = () => {
  return (
    <>
      <div className="flex flex-col  md:flex-row md:justify-end p-2 md:space-x-3 bg-slate-200">
        <a href="#" className="text-lg font-bold hover:text-purple-500">
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
      </div>
    </>
  );
};

export default NavBar;
