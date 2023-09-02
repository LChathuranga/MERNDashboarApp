import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const SuperAdminRoute = () => {
  const userData = useSelector((state) => state.global.userData);

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  if (userData.role !== "superadmin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default SuperAdminRoute