import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="sticky w-full px-6 lg:px-20">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Layout;
