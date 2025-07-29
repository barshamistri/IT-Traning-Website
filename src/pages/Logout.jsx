import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data on logout
    localStorage.removeItem("user");

    // Redirect to login page after logout
    navigate("/login");
  }, [navigate]);

  return null; // Nothing to render
};

export default Logout;
