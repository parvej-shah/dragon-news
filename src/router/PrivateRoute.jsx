import { useAuth } from "../auth/AuthProvider";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth();
if (!user?.email) return <Navigate to="/auth/login" />;
  else if(loading) return <p>Loading</p>;
  else return children;
};

export default PrivateRoute;

