import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Aboutus from "../components/Aboutus";
import Carts from "../components/Carts";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home/*", element: <App /> },

  { path: "/Aboutus", element: <Aboutus /> },
  { path: "/Cart", element: <Carts cartItems={[]} /> },
]);

export default router;
