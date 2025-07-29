import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Get raw string from localStorage
  const storedUser = localStorage.getItem("user");

  // Safely parse or fallback to null
  let user = null;
  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    // If parsing fails, clear the invalid user data
    localStorage.removeItem("user");
  }

  // Redirect if no user data
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return null; // Or a loading spinner while redirecting
  }

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded shadow mt-10">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
