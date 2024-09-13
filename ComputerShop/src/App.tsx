import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      {/* main div */}
      <div>
        {/* nav bar div */}
        <div className="flex flex-col  md:flex-row  md:justify-end p-2 rounded border-2 h-20">
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default App;
