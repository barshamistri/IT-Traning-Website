const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setErrorMsg("");

  try {
    const res = await axios.post("http://localhost:5000/api/user/login", {
      email,
      password,
    });

    // After successful login response
    if (res.data.success) {
      // Save user info in localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      // Redirect to courses page
      navigate("/course");
    } else {
      setErrorMsg(res.data.message || "Invalid credentials");
    }
  } catch (error) {
    if (error.response) {
      setErrorMsg(error.response.data.message || "Login failed");
    } else {
      setErrorMsg("Network error. Please try again.");
    }
  }

  setLoading(false);
};
