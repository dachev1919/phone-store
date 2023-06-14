import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../modules/Home/pages/Home";
import { ROUTES } from "../utils/routes";
import Product from "../modules/Product/pages/Product";
import Profile from "../modules/Profile/pages/Profile";
import Category from "../modules/Category/pages/Category";
import Cart from "../modules/Cart/pages/Cart";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ ROUTES.HOME } />} />
      <Route path='/*' element={<Navigate to={ ROUTES.HOME } />} />
      <Route path={ ROUTES.HOME } element={<Home />} />
      <Route path={ ROUTES.PRODUCT } element={<Product />} />
      <Route path={ ROUTES.PROFILE } element={<Profile />} />
      <Route path={ ROUTES.CATEGORY } element={<Category />} />
      <Route path={ ROUTES.CART } element={<Cart />} />
    </Routes>
  );
};

export default Routers;
