import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute() {
  const { user } = useContext(AuthContext);

  // If user is not logged in, redirect to login page
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
