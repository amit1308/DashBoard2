import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteFour = () => {
  const email = JSON.parse(window.localStorage.getItem("email"));
  const password = JSON.parse(window.localStorage.getItem("password"));
  
  return <>{email && password ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouteFour;
