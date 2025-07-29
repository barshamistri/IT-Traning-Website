import React, { useState } from "react";

const Admission = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    paymentPreference: "eSewa",
  });

  const [submitted, setSubmitted] = useState(false);

  const courses = [
    "Web Development",
    "Graphic Design",
    "Data Science & Analytics",
    "Programming - Python",
    "Programming - Java",
  ];

  const paymentOptions = ["eSewa", "Khalti", "Stripe", "PayPal"];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace alert with API call to backend
    alert(`Thank you for your admission, ${formData.fullName}!`);
    setSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      paymentPreference: "eSewa",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Admission Form</h1>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
          Your admission request has been submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <label className="block mb-2 font-semibold" htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 font-semibold" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 font-semibold" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="e.g., 9851234567"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 font-semibold" htmlFor="course">
          Select Course
        </label>
        <select
          id="course"
          name="course"
          required
          value={formData.course}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <label className="block mb-2 font-semibold" htmlFor="paymentPreference">
          Payment Preference
        </label>
        <select
          id="paymentPreference"
          name="paymentPreference"
          value={formData.paymentPreference}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {paymentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit Admission
        </button>
      </form>
    </div>
  );
};

export default Admission;
