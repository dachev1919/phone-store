import React, { useEffect } from "react";
import Routers from "../../../routes/Routers";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../store/categories/categoriesSlice";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
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
