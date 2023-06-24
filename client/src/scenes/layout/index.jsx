import { Box, useMediaQuery } from "@mui/material";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "state/api";

function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box height="100%" width="100%" display={isNonMobile ? "flex" : "block"}>
      <SideBar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1} >
        <NavBar 
          user={data||{}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* this represent the child components in this components.
            In App.js there is "<Router element={<Layout/>}" It is the parent 
            component and others below it are child components   */}
        <Box mx="30px">
        <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
