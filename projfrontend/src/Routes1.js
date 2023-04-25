import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";

const Routes1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/signup" exact Component={Signup} />
        <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes1;
