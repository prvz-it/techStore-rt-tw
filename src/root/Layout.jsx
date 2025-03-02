import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import FooterTop from "../components/footerTop/FooterTop";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <FooterTop />
      <Footer />
    </>
  );
};

export default Layout;
