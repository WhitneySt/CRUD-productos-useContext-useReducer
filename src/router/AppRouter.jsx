import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Products from "../pages/Productos/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useAppContext } from "../context/AppContext";
import useSessionStorage from "../hooks/useSessionStorage";

const AppRouter = () => {
  const {
    user: { user, userDispatch },
  } = useAppContext();

  const { storagedData } = useSessionStorage("user");
  
  useEffect(() => {
    if (!user.user && storagedData) {
      userDispatch({
        type: "LOGIN",
        payload: storagedData,
      });
    }
  }, [user, storagedData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRoutes />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route index element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
