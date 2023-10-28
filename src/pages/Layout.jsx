import React from "react";
import { Outlet } from "react-router";
import SlideBar from "../component/SlideBar";
import Content from "../component/Content";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <div>
      <div className="home">
        <div className="home-list">
          <SlideBar />
          <Content />
        </div>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
