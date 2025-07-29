import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admission from "./pages/Admission";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

 

function App() {
  // ✅ Define user safely BEFORE using it
  let user = null;
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      user = JSON.parse(storedUser);
    }
  } catch (err) {
    console.error("Failed to parse user:", err);
    user = null;
  }

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/profile" element={<Profile />} />
           

          <Route
            path="/admission"
            element={
              
                <Admission />
              
            }
          />
          <Route
            path="/course"
            element={
              
                <Course />
              
            }
          />
          <Route
            path="/contact"
            element={
              
                <Contact />
              
            }
          />
          <Route
            path="/profile"
            element={
              
                <Profile />
              
            }
          />
        </Routes>
      </div>
    
  );
}

export default App;
