import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function UserRoute() {
  const { userData } = useSelector((state) => state.global.userData);

  return userData ? <Outlet /> : <Navigate to="/login" replace />;
}

export default UserRoute;
