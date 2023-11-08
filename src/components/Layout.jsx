import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "./Shared/Navbar";
import Footer from "./Shared/Footer";

const Layout = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <ComplexNavbar></ComplexNavbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
