import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("--cached-profile--");
  console.log(isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
