import {Box} from "../Components/StyledComponents/Box";
import { Outlet, Link } from "react-router-dom";
import React, {useState} from "react";
import NavigationBar from "../Components/Navigation/NavigationBar";
import Footer from "./Footer";
import ThemeContext from "../Components/ThemeContext";
import Header from "./Header";


const Layout = () => {

  const [theme, setTheme] = useState('dark')

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Box color={theme}>
          <NavigationBar />
          <Outlet />
        </Box>
        <Footer />
      </ThemeContext.Provider>
    </>
  )
};

export default Layout;