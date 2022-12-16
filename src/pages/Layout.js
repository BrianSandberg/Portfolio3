import { Outlet, Link } from "react-router-dom";
import React, {useState} from "react";
import NavigationBar from "../Components/Navigation/NavigationBar";
import Footer from "../Components/Elements/Footer";
import ThemeContext from "../Components/ThemeContext";
import Header from "../Components/Elements/Header";
{/*import Page from "../Components/Elements/Page";*/}
const Layout = () => {

  const [theme, setTheme] = useState('dark')

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Header />      
      <NavigationBar />
      {/*<Page />*/}
      <Outlet />
      <Footer />
    </ThemeContext.Provider>
    </>
  )
};

export default Layout;