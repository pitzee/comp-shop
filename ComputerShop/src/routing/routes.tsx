import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Products from "../components/Products";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <App /> },
  { path: "/Products", element: <Products /> },
]);

export default router;
