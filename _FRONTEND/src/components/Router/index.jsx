import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home"
import Error404 from "../../pages/Error404";
import Error401 from "../../pages/Error401";
import pathroutes from '../../helpers/pathroutes.js'
import LoginComponent from "../LoginComponents";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`${pathroutes.login}`} element={<LoginComponent />} />

      <Route path={`${pathroutes.error401}`} element={<Error401 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}