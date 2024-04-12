import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <NavigationBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
