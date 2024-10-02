const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="mt-4 p-3 flex justify-between border border-b-2 border-b-gray-300 ">
        <div>
          <h1 className="font-bold text-xl">Newsletter</h1>
          <p>subscribe to get information about products and coupons</p>
        </div>

        <div>
          <input
            type="text"
            className="p-2 border-2 rounded-l-md"
            placeholder="Email address"
          />
          <button className=" pl-2 border border-black p-2 bg-green-600">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div>
          <h1 className="font-bold">Contact us</h1>
          <p>phone 09090909009</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
