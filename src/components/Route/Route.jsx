import { createBrowserRouter } from "react-router-dom";
import PageTransition from "../FramerMotion/PageTransition";

import Layout from "../Layout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
import Home from "../Page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Layout></Layout>,
    children: [
      {
        path: "/Home",
        element: <Home></Home>,
        loader: () => fetch("/brandData.json"),
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },
  // {
  //   path: "/signUp",
  //   element: <SignUp></SignUp>,
  // },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
