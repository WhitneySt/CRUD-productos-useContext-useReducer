import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const PrivateRoutes = ({ redirectPath="/login"}) => {
  const {
    user: { user },
  } = useAppContext();

  if (!user.isAuth) return <Navigate to={redirectPath} />;
  return <Outlet/>;
};

export default PrivateRoutes