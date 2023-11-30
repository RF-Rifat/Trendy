import { createBrowserRouter } from "react-router-dom";
import PageTransition from "../FramerMotion/PageTransition";
import Layout from "../Layout";
import PrivateRoute from "./PrivateRoute";
import Home from "../Page/Home/Home";
import Women from "../Page/Women/Women";
import KidCloth from "../Page/Kid Cloths/KidCloth";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import MyCart from "../Page/Cart/MyCart";
import Service from "../Page/Services/Service";
import ClothDetails from "../Page/Services/ClothDetails";
import ServiceCart from "../Page/Services/ServiceCart";
import ErrorPage from "../Shared/ErrorPage";

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
        loader: () => fetch("https://trendy-server.vercel.app/brand"),
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
        loader: () => fetch("https://trendy-server.vercel.app/serviceData"),
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
        loader: ({ params }) =>
          fetch(`https://trendy-server.vercel.app/serviceData/${params.id}`),
      },
      {
        path: "/ServiceCart",
        element: (
          <PrivateRoute>
            <PageTransition>
              <ServiceCart></ServiceCart>
            </PageTransition>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://trendy-server.vercel.app/serviceCart`),
      },
      {
        path: "/Women",
        element: (
          <PrivateRoute>
            <Women></Women>
          </PrivateRoute>
        ),
        loader: () => fetch("https://trendy-server.vercel.app/womenCloth"),
      },
      {
        path: "/Kid",
        element: (
          <PrivateRoute>
            <KidCloth></KidCloth>
          </PrivateRoute>
        ),
        loader: () => fetch("https://trendy-server.vercel.app/kidCloth"),
      },
      {
        path: "/Cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://trendy-server.vercel.app/userCartData"),
      },
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
