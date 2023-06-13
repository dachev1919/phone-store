import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../modules/Home/pages/Home";
import { ROUTES } from "../utils/routes";
import Product from "../modules/Product/pages/Product";
import Profile from "../modules/Profile/pages/Profile";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ ROUTES.HOME } />} />
      <Route path={ ROUTES.HOME } element={<Home />} />
      <Route path={ ROUTES.PRODUCT } element={<Product />} />
      <Route path={ ROUTES.PROFILE } element={<Profile />} />
    </Routes>
  );
};

export default Routers;
