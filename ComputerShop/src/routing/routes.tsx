import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home/*", element: <App /> },
]);

export default router;
