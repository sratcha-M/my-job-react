import React from "react";
import { Route, Routes as Routers } from "react-router-dom";

import Home from "./pages/Home";
import Component404 from "./404";

const Routes = () => {
  return (
    <Routers>
      <Route path="*" element={<Component404 />} />
      <Route path="/" element={<Home />} />
    </Routers>
  );
};

export default Routes;
