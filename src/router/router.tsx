import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Favorites from "../components/pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

export default router;
