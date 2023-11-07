import { createBrowserRouter } from "react-router-dom";
import PageTransition from "../FramerMotion/PageTransition";
import Home from "../Page/Home";
import Layout from "../Layout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
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
