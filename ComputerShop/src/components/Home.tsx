import Hpvictus from "../assets/images/HP-Victus-Gaming-2024-300x300.jpg";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-4 mt-10 p-2 border border-solid ">
        <div className="border border-gray-200">
          <a href="">
            <img src={Hpvictus} alt="" className="hover:translate-y-2" />
            <p className="p-2  text-blue-600 ">hp victus</p>
            <p className="p-2  text-red-600">BR 500</p>
          </a>
        </div>
        <div className="border border-gray-200">
          <a href="">
            <img src={Hpvictus} alt="" className="hover:translate-y-2" />
            <p className="p-2  text-blue-600 ">hp victus</p>
            <p className="p-2  text-red-600">BR 500</p>
          </a>
        </div>
        <div className="border border-gray-200">
          <a href="">
            <img src={Hpvictus} alt="" className="hover:translate-y-2" />
            <p className="p-2  text-blue-600 ">hp victus</p>
            <p className="p-2  text-red-600">BR 500</p>
          </a>
        </div>
        <div className="border border-gray-200">
          <a href="">
            <img src={Hpvictus} alt="" className="hover:translate-y-2" />
            <p className="p-2  text-blue-600 ">hp victus</p>
            <p className="p-2  text-red-600">BR 500</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
