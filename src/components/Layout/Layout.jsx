import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <NavigationBar />
      <main style={{marginTop: '70px'}}>
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;
