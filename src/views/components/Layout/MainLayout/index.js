import React from "react";
import { Outlet } from "react-router-dom";

import "./style.scss";

const MainLayout = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default MainLayout;
