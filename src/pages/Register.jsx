import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password) {
      alert("All fields are required!");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters!");
      return;
    }

    let response = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, password }),
    });

    if (response.ok) {
      response = await response.json();
      alert(response.message + "!");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      navigate("/contact");
      return;
    }
    alert("Error");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-4">
      <form
        onSubmit={handelSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-1 font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-purple-700 text-white py-2 rounded-md transition"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 font-medium cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
