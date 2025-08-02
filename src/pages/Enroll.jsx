const handleEnroll = (course, navigate) => {
  const user = localStorage.getItem("user");

  if (!user) {
    localStorage.setItem("pendingCourse", JSON.stringify(course));
    navigate("/login");
  } else {
    navigate("/payment", { state: { totalAmount: course.price } });
  }
};

export default handleEnroll;
