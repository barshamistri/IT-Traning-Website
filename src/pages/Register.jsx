import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaPhoneAlt, FaEnvelope, FaLock } from "react-icons/fa";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");  // Add error message state
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(""); // reset error message on new submit

    if (!name || !email || !phone || !password) {
      setErrorMsg("All fields are required!");
      return;
    }

    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters!");
      return;
    }

    try {
      let response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message + "!");
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        navigate("/contact");
      } else {
        // Show backend error message (like email/phone exists)
        setErrorMsg(data.message || "Registration failed");
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-200 via-blue-200 to-pink-200 p-6">
      <form
        onSubmit={handelSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-7"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Create Your Account
        </h2>

        {/* Show error message */}
        {errorMsg && (
          <p className="text-center text-red-600 font-semibold mb-2">{errorMsg}</p>
        )}

        {/* Name */}
        <div className="relative">
          <FaUser className="absolute left-3 top-3.5 text-purple-500" />
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <FaPhoneAlt className="absolute left-3 top-3.5 text-purple-500" />
          <input
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3.5 text-purple-500" />
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="absolute left-3 top-3.5 text-purple-500" />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md transition"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-600 font-semibold cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
