import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
     <Sidebar /> 
     <div className="container-fluid p-0">
      <Outlet />
      </div>
    </>
  )
};

export default Layout;