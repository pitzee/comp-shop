import Footer from "./Footer";
import NavBar from "./NavBar";
import { Computers, computer } from "../products/products";

const Products = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 mt-4 p-2 border border-solid ">
        {Computers.map((comp: computer) => (
          <div className="border border-gray-200" key={comp.id}>
            <a href="">
              <img src={comp.image} alt="" className="hover:translate-y-2" />
              <p className="p-2  text-blue-600 ">{comp.name}</p>
              <p className="p-2  text-red-600">{comp.price} birr</p>
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
