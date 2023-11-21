import { createBrowserRouter } from "react-router-dom";
import PageTransition from "../FramerMotion/PageTransition";

import Layout from "../Layout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";
import Home from "../Page/Home/Home";
import Women from "../Page/Women/Women";
import KidCloth from "../Page/Kid Cloths/KidCloth";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import MyCart from "../Page/Cart/MyCart";

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
        loader: () => fetch("http://localhost:5000/womenCloth"),
      },
      {
        path: "/Kid",
        element: <KidCloth></KidCloth>,
        loader: () => fetch("http://localhost:5000/kidCloth"),
      },
      {
        path: "/Cart",
        element: <MyCart></MyCart>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>
  }
]);

export default router;
