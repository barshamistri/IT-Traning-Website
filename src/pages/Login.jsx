import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));

        const pendingCourse = localStorage.getItem("pendingCourse");
        if (pendingCourse) {
          const course = JSON.parse(pendingCourse);
          localStorage.removeItem("pendingCourse");
          navigate("/payment", { state: { totalAmount: course.price } });
        } else {
          navigate("/course");
        }
      } else {
        setErrorMsg(res.data.message || "Invalid credentials");
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        {errorMsg && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4 text-center text-sm font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400 text-xl" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400 text-xl" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white text-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-900 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-red-600 hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
