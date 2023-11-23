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
import Service from "../Page/Services/Service";
import ClothDetails from "../Page/Services/ClothDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: (
          <PageTransition>
            <Home></Home>
          </PageTransition>
        ),
        loader: () => fetch("http://localhost:5000/brand"),
      },
      {
        path: "/Service",
        element: (
          <PrivateRoute>
            <PageTransition>
              <Service></Service>
            </PageTransition>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/serviceData"),
      },
      {
        path: "/Service/:id",
        element: (
          <PrivateRoute>
            <PageTransition>
              <ClothDetails></ClothDetails>
            </PageTransition>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/serviceData/${params.id}`),
      },
      {
        path: "/Women",
        element: (
          <PrivateRoute>
            <Women></Women>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/womenCloth"),
      },
      {
        path: "/Kid",
        element: (
          <PrivateRoute>
            <KidCloth></KidCloth>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/kidCloth"),
      },
      {
        path: "/Cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/userCartData"),
      }
    ],
  },
  {
    path: "*",
    element: (
      <PageTransition>
        <ErrorPage></ErrorPage>
      </PageTransition>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);

export default router;
