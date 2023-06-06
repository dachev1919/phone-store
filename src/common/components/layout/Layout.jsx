import React from "react";
import Routers from "../../../routes/Routers";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  return (
    <div className='app'>
      <Header />
      <div className="container">
        <Sidebar />
        <Routers>

        </Routers>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
