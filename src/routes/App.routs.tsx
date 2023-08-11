import { Route, Routes } from "react-router-dom";
import { RoutesConstants } from "../helpers/route.helper";
import Register from "../pages/Register/Register";
import Reports from "../pages/Reports/Reports";
import Websites from "../pages/Websites/Websites";
import Login from "../pages/Login/Login";
import WebsiteDetails from "../pages/WebsiteDetails/WebsiteDetails";
import Home from "../pages/Home/Home";
import React from "react";

export default function AppRoutes() {
  return (
    <>
      <Home />
      <Routes>
        <Route path={RoutesConstants.register()} element={<Register />} />
        <Route path={RoutesConstants.login()} element={<Login />} />
        <Route path={RoutesConstants.reports()} element={<Reports />} />
        <Route path={RoutesConstants.websites()} element={<Websites />} />
        <Route
          path={RoutesConstants.website(":id")}
          element={<WebsiteDetails />}
        />
      </Routes>
    </>
  );
}
