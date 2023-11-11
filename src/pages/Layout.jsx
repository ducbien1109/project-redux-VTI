import React from "react";
import { Outlet } from "react-router";
import SlideBar from "../component/SlideBar";
import Content from "../component/Content";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <div>
      <div className="home">
        <section className="home-music">
          <div className="home-list">
            <SlideBar />
            <Content />
          </div>
        </section>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
