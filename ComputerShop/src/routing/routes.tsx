import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Aboutus from "../components/Aboutus";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <App /> },

  { path: "/Aboutus", element: <Aboutus /> },
]);

export default router;
