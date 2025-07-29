import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/user/login", { email, password });

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Login successful!");
        navigate("/profile");
      } else {
        alert(res.data.message || "You are not registered");
        // Clear inputs on failed login
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          alert("You are not registered or wrong credentials");
        } else {
          alert(error.response.data.message || "Login failed");
        }
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
      // Clear inputs on error
      setEmail("");
      setPassword("");
      console.error("Login error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center mb-1">Hello Again!</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Welcome back you've been missed!
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <div className="text-right text-sm text-blue-500 cursor-pointer hover:underline">
            Recover Password
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center gap-4">
          <button className="border p-2 rounded-full hover:bg-gray-100">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
          </button>
          <button className="border p-2 rounded-full hover:bg-gray-100">
            <img src="https://img.icons8.com/ios-glyphs/24/github.png" alt="GitHub" />
          </button>
          <button className="border p-2 rounded-full hover:bg-gray-100">
            <img src="https://img.icons8.com/fluency/24/facebook-new.png" alt="Facebook" />
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-500">
          Not a member?{' '}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
