// src/pages/ProtectedRoute.jsx

import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ compo: Component }) => {
  const { isAuth } = useContext(AuthContext); // ❗ Will crash if context not set up

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return isAuth ? <Component /> : null;
};

export default ProtectedRoutes;

