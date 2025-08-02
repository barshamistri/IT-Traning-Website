import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./utils/auth"; // import the helper

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    // user is NOT logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

 if (res.data.success) {
  localStorage.setItem("user", JSON.stringify(res.data.user));
  navigate("/courses");
}
};

export default ProtectedRoute;
