const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/user/login", { email, password });

    if (res.data.success) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Login successful!");
      navigate("/profile");
    } else {
      // Show the message returned by backend
      alert(res.data.message || "You are not registered");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("An error occurred during login. Please try again.");
  }
};
