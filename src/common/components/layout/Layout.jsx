import React, { useEffect } from "react";
import Routers from "../../../routes/Routers";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../store/categories/categoriesSlice";
import { getProducts } from "../../../store/products/productSlice";
import UserForm from "../user/UserForm";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
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
      <UserForm />
    </div>
  );
};

export default Layout;
