import NavBar from "./NavBar";

const Aboutus = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="relative bg-blue-600 h-screen m-4 rounded-xl">
          <div className="absolute bg-white  w-8/12 h-5/6 m-10 rounded-xl ">
            <div className="absolute bg-blue-900 w-40 h-5/6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
