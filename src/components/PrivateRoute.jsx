import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let userData = localStorage.getItem("user");

  let user = null;
  try {
    if (userData) {
      user = JSON.parse(userData);
    }
  } catch (err) {
    console.error("Invalid JSON in localStorage:", err);
    user = null;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
