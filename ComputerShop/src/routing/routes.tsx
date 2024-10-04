import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Products from "../components/Products";
import Aboutus from "../components/Aboutus";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <App /> },
  { path: "/Products", element: <Products /> },
  { path: "/Aboutus", element: <Aboutus /> },
]);

export default router;
