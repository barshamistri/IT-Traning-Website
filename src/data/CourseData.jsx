// Inside your handleEnroll function
const handleEnroll = () => {
  if (!isLoggedIn) {
    // Save the selected course before login
    localStorage.setItem("pendingCourse", JSON.stringify(course));
    navigate("/login");
  } else {
    navigate("/payment", { state: { totalAmount: course.price } });
  }
};
