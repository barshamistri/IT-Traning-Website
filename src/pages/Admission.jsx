import React, { useState } from "react";
import Footer from "../components/Footer";

const Admission = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    paymentPreference: "eSewa",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const courses = [
    "Web Development",
    "Graphic Design",
    "Data Science & Analytics",
    "Programming - Python",
    "Programming - Java",
  ];

  const paymentOptions = ["eSewa", "Khalti", "Stripe", "PayPal"];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/admission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        paymentPreference: "eSewa",
      });
    } else {
      alert(data.message || "Failed to submit admission");
    }
  } catch (error) {
    alert("Error submitting form: " + error.message);
  }
};

  return (
    <div>
      <div className="max-w-3xl mx-auto px-6 py-10 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-blue-900">
          Admission Form
        </h1>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium shadow">
            Your admission request has been submitted successfully!
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg text-center font-medium shadow">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              required
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="e.g., 9851234567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Select Course
            </label>
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            >
              <option value="" disabled>
                -- Choose a course --
              </option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Preference */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Payment Preference
            </label>
            <select
              name="paymentPreference"
              value={formData.paymentPreference}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            >
              {paymentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Admission"}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Admission;
