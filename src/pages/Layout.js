import { Outlet, Link } from "react-router-dom";
import NavigationBar from "../Components/Navigation/NavigationBar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
};

export default Layout;