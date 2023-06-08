import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../modules/Home/pages/Home";
import { ROUTES } from "../utils/routes";
import Product from "../modules/Product/pages/Product";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ ROUTES.HOME } />} />
      <Route path={ ROUTES.HOME } element={<Home />} />
      <Route path={ ROUTES.PRODUCT } element={<Product />} />
    </Routes>
  );
};

export default Routers;
