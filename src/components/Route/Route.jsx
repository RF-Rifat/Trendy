import { createBrowserRouter } from "react-router-dom";
import PageTransition from "../FramerMotion/PageTransition";

import Layout from "../Layout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";
import Home from "../Page/Home/Home";
import Women from "../Page/Service/Women";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brand"),
      },
      {
        path: "/Women",
        element: <Women></Women>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
