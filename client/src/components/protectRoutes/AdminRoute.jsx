import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const userData = useSelector((state) => state.global.userData);
  const allowedRoles = ["admin", "superadmin"];

  if (!userData) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(userData.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
