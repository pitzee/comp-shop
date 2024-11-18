import { Carousel } from "flowbite-react";
("use client");

import pc1 from "../assets/images/pc1.jpg";
import pc2 from "../assets/images/pc2.jpg";
import pc3 from "../assets/images/pc3.jpg";
import pc4 from "../assets/images/pc4.jpg";

const Home = () => {
  return (
    <>
      <div className="relative mt-64 md:mt-14 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={2000}>
          <img src={pc1} alt="..." />
          <img src={pc2} alt="..." />
          <img src={pc3} alt="..." />
          <img src={pc4} alt="..." />
        </Carousel>
      </div>
    </>
  );
};

export default Home;
