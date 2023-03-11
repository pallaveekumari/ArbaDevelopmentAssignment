import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }: any) => {
  let token = localStorage.getItem("token");

  if (token) {
    return { children };
  } else {
    <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
