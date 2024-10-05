import NavBar from "./NavBar";

const Aboutus = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="relative bg-blue-500 h-screen m-4 rounded-xl flex flex-col">
          <div className="absolute bg-white  w-8/12 h-5/6 ml-10 mt-10 bottom-0  rounded-t-xl  ">
            <div className="absolute bg-gray-200 h-52 w-full rounded-t-xl">
              <h1 className="flex justify-center justify-items-center mt-2 font-extrabold text-5xl">
                About us
              </h1>
            </div>
            <div className="absolute bg-blue-600 w-40 h-5/6 rounded-tl-md rounded-br-3xl">
              <div className="absolute bg-gradient-to-t from-gray-900 to-gray-600 rounded-md h-72 w-52 ml-10 mt-20">
                <div className="text-white">
                  <h1>COMPUTER </h1>
                  <p>our company is </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute bg-gray-200 w-96 top-36   right-16 bottom-0 rounded-t-xl">
            <div className="absolute bg-blue-600 w-36 h-5/6 rounded-br-3xl rounded-tl-xl">
              <div className="absolute bg-gradient-to-t from-gray-900 to-gray-600 rounded-md h-72 w-52 ml-10 bottom-7"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
