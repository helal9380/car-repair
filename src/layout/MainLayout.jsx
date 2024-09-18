/** @format */

import { Outlet } from "react-router-dom";
import Navber from "../Pages/shared/Navber/Navber";
import Footer from "../Pages/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2 md:px-4">
      <Navber></Navber>
      <div className="flex flex-col max-h-[calc(100vh - 296px)]">
          <Outlet />
        </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
