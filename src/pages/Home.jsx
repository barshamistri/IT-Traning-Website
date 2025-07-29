import React, { useState } from "react";

import { FcSettings } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcOrganization } from "react-icons/fc";

const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Web Development",
    skillLevel: "Beginner",
    description:
      "Learn HTML, CSS, JavaScript and React to build modern websites.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Advanced Python Programming",
    category: "Programming",
    skillLevel: "Advanced",
    description: "Deep dive into Python with real-world applications.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    category: "UI/UX Design",
    skillLevel: "Beginner",
    description: "Learn design principles to create stunning user interfaces.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Data Science with Python",
    category: "Data Science & Analytics",
    skillLevel: "Intermediate",
    description: "Use Python to analyze and visualize data effectively.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Network Security Essentials",
    category: "Networking & Security",
    skillLevel: "Expert",
    description: "Protect networks from cyber threats and attacks.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Web Development Bootcamp",
    category: "Web Development",
    skillLevel: "Intermediate",
    description: "Build dynamic websites with Node.js and Express.",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Introduction to Cloud Computing",
    category: "Cloud Computing",
    skillLevel: "Beginner",
    description: "Understand the basics of cloud services like AWS and Azure.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Mobile App Development with React Native",
    category: "Mobile App Development",
    skillLevel: "Intermediate",
    description: "Create cross-platform mobile apps using React Native.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Digital Marketing Fundamentals",
    category: "Digital Marketing",
    skillLevel: "Beginner",
    description: "Learn SEO, SEM, and social media marketing strategies.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Software Testing and QA",
    category: "Software Testing",
    skillLevel: "Intermediate",
    description: "Master manual and automated testing techniques.",
    image:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Big Data Analytics",
    category: "Data Science & Analytics",
    skillLevel: "Advanced",
    description:
      "Learn to handle and analyze large data sets using Hadoop and Spark.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00aee8c59f2e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "Cybersecurity Advanced Techniques",
    category: "Networking & Security",
    skillLevel: "Expert",
    description:
      "Advanced strategies for protecting networks and data integrity.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    title: "Graphic Design with Adobe Photoshop",
    category: "Graphic Design",
    skillLevel: "Beginner",
    description:
      "Learn graphic design basics and photo editing with Photoshop.",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    title: "Machine Learning with Python",
    category: "Programming",
    skillLevel: "Advanced",
    description:
      "Build machine learning models using scikit-learn and TensorFlow.",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    title: "Cloud Security Fundamentals",
    category: "Cloud Computing",
    skillLevel: "Intermediate",
    description: "Learn how to secure cloud environments and manage risks.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    title: "ReactJS Advanced Concepts",
    category: "Web Development",
    skillLevel: "Advanced",
    description:
      "Deep dive into React hooks, context API, and performance optimization.",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de7f1f9?auto=format&fit=crop&w=800&q=80",
  },
];

const experts = [
  {
    id: 1,
    name: "Sanjay Sharma",
    expertise: "Full Stack Development",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    name: "Anita Thapa",
    expertise: "Cybersecurity Specialist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Ramesh Koirala",
    expertise: "Data Scientist",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    student: "Priya Sharma",
    quote:
      "The courses here transformed my career. The instructors are very supportive!",
  },
  {
    id: 2,
    student: "Deepak Rai",
    quote:
      "Great hands-on training with real world projects. Highly recommend!",
  },
  {
    id: 3,
    student: "Sita Gurung",
    quote: "Excellent content and very practical workshops. I learned so much!",
  },
];

function Home() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  // Newsletter state
  const [email, setEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = coursesData.filter((course) => {
      const matchesKeyword = course.title
        .toLowerCase()
        .includes(keyword.toLowerCase());
      const matchesCategory = category ? course.category === category : true;
      const matchesSkill =
        skillLevel && skillLevel !== "All Levels"
          ? course.skillLevel === skillLevel
          : true;
      return matchesKeyword && matchesCategory && matchesSkill;
    });

    setFilteredCourses(filtered);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setNewsletterMsg("Please enter a valid email.");
      return;
    }
    setNewsletterMsg("Thank you for subscribing!");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans absolute">
      {/* Header */}
      <div className="ml-18 mt-10">
        <div>
          <h1 className="text-4xl font-bold">
            IT TRAINING <br />
            MANAGEMENT <br />
            SYSTEM
          </h1>
          <p className="mt-5 ">
            Elevate your career with our <br />
            professional IT training courses.
          </p>
        </div>

        <div className="mt-5 ">
          <div className="bg-orange-400 w-110 h-8 pl-5 pt-0.5 text-white rounded-md">
            New Python Course Launched
          </div>

          <div className="bg-blue-400 w-110 mt-2 h-8 pl-5 pt-0.5 text-white rounded-md">
            10% off for January batch!
          </div>

          <div className="bg-blue-700 w-110 mt-2 h-8 pl-5 pt-0.5 text-white rounded-md">
            Enroll Now
          </div>

          <div className="">
            
            <img src="https://blog.novatr.com/hubfs/A%20man%20coding%20on%20a%20computer-1.jpg" alt="Our Team" className="w-130 ml-130 h-100 absolute rounded-lg top-10" />

          </div>


        </div>
      </div>

      <div className="mt-20 flex gap-20 ">
        <h1 className="absolute ml-20 text-4xl font-bold">
          Highlight Features
        </h1>

        <div className="flex w-150 ml-18 h-50 mt-20 ">
          <div className="h-15 w-50 absolute">
            <span className="absolute pl-5">
              {" "}
              <FcReadingEbook size={35} className="mr-3" />
            </span>
            <h1 className="pl-20 text-xl">IT training</h1>
          </div>
          <div className="ml-70  h-15 w-50 absolute">
            {" "}
            <span className="absolute pl-5">
              {" "}
              <FcGraduationCap size={35} className="mr-3" />
            </span>{" "}
            <h1 className="pl-20  text-xl">Certification preparation</h1>
          </div>
          <div className="mt-25 w-50 h-15">
            {" "}
            <span className="absolute pl-5">
              {" "}
              <FcOrganization size={35} className="mr-3" />
            </span>
            <h1 className="pl-20  text-xl">Corporate workshops</h1>
          </div>
          <div className="mt-25 ml-20 w-50 h-15 ">
            {" "}
            <span className="absolute pl-5">
              {" "}
              <FcSettings size={35} className="mr-3" />
            </span>
            <h1 className="pl-20  text-xl">Workshops</h1>
          </div>
        </div>

        <div className="w-full  bg-gray-200 p-6 rounded-md mt-10">
          <h1 className="text-3xl">
            <span className="font-bold">Over 5,000 students</span> <br />
            successfully trained <br /> and placed in top <br /> companies.
          </h1>
        </div>
      </div>

      {/* Search Section */}
      <form
        onSubmit={handleSearch}
        className="flex flex-wrap items-center gap-4 border rounded-md p-4 bg-white shadow-md mt-16"
      >
        <input
          type="text"
          placeholder="Search by keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-grow min-w-[200px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Category (All)</option>
          <option value="Programming">Programming</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science & Analytics">
            Data Science & Analytics
          </option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Networking & Security">Networking & Security</option>
          <option value="Software Testing">Software Testing</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>

        <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Skill Level (All)</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
          <option value="All Levels">All Levels</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Courses list filtered */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="border rounded-md p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-1">
                <strong>Category:</strong> {course.category}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Skill Level:</strong> {course.skillLevel}
              </p>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No courses found matching your criteria.
          </p>
        )}
      </div>

      {/* ------------------ Expert Instructors Section ------------------ */}
      <section className="mt-28">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Meet Our Expert Instructors
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="max-w-xs bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{expert.name}</h3>
              <p className="text-blue-600 font-medium">{expert.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ Testimonials Section ------------------ */}
      <section className="mt-28 bg-gray-50 p-10 rounded-lg shadow-inner">
        <h2 className="text-4xl font-bold mb-8 text-center">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-blue-700 text-right">
                - {testimonial.student}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ Newsletter Signup Section ------------------ */}
      <section className="mt-28 bg-blue-900 rounded-lg p-10 text-white text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">
          Get latest updates on new courses, offers, and events delivered to
          your inbox.
        </p>
        <form
          onSubmit={handleNewsletterSubmit}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md text-white flex-grow"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
        {newsletterMsg && <p className="mt-4 text-sm">{newsletterMsg}</p>}
      </section>

      {/* ------------------ Back To Top Button ------------------ */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default Home;
