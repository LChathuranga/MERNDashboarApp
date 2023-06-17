import { Box, useMediaQuery } from "@mui/material";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box height="100%" width="100%" display={isNonMobile ? "flex" : "block"}>
      <SideBar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <NavBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* this represent the child components in this components.
            In App.js there is "<Router element={<Layout/>}" It is the parent 
            component and others below it are child components   */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
