import React from "react";
import { RiTeamLine, RiLightbulbLine, RiFlagLine, RiChatSmile2Line } from "react-icons/ri";

const teamMembers = [
  {
    id: 1,
    name: "Sanjay Sharma",
    role: "Founder & CEO",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Passionate about empowering students with industry-ready skills.",
  },
  {
    id: 2,
    name: "Anita Thapa",
    role: "Head of Curriculum",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Designs up-to-date courses aligned with the latest tech trends.",
  },
  {
    id: 3,
    name: "Ramesh Koirala",
    role: "Lead Instructor",
    photo: "https://randomuser.me/api/portraits/men/30.jpg",
    bio: "Expert in full-stack development and passionate about teaching.",
  },
];

const milestones = [
  { year: 2019, event: "Company founded with a mission to bridge the IT skills gap." },
  { year: 2020, event: "Launched first online course: Full Stack Web Development." },
  { year: 2021, event: "Trained over 2,000 students and expanded course catalog." },
  { year: 2022, event: "Partnered with top companies for job placements." },
  { year: 2023, event: "Introduced hybrid courses (online + physical)." },
];

function About() {
  return (
    <div className="max-w-7xl mx-auto p-8 font-sans">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Empowering IT professionals with skills, knowledge, and opportunities to succeed in a fast-evolving digital world.
        </p>
      </header>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-16 mb-20">
        <div className="flex flex-col items-center text-center">
          <RiFlagLine size={60} className="text-blue-600 mb-4" />
          <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 max-w-md">
            To provide industry-relevant IT training that bridges the gap between education and employment.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <RiLightbulbLine size={60} className="text-green-600 mb-4" />
          <h2 className="text-3xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-700 max-w-md">
            To become a leading IT education platform that nurtures talent and drives innovation worldwide.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-20 bg-gray-100 p-12 rounded-lg shadow-inner">
        <h2 className="text-4xl font-bold text-center mb-10">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <RiChatSmile2Line size={48} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student Success</h3>
            <p className="text-gray-700 max-w-xs mx-auto">
              We prioritize student growth and job readiness above all.
            </p>
          </div>
          <div>
            <RiTeamLine size={48} className="text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaborative Learning</h3>
            <p className="text-gray-700 max-w-xs mx-auto">
              Building a supportive community for shared knowledge and growth.
            </p>
          </div>
          <div>
            <RiLightbulbLine size={48} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation & Excellence</h3>
            <p className="text-gray-700 max-w-xs mx-auto">
              Staying ahead with cutting-edge curriculum and teaching methods.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {teamMembers.map(({ id, name, role, photo, bio }) => (
            <div
              key={id}
              className="max-w-xs bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src={photo}
                alt={name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="text-blue-600 font-medium mb-2">{role}</p>
              <p className="text-gray-700">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <ol className="relative border-l border-gray-300 max-w-3xl mx-auto">
          {milestones.map(({ year, event }, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white text-white font-semibold">
                {year}
              </span>
              <p className="mb-2 text-lg font-semibold text-gray-900">{event}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to start your IT career?</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg">
          Join thousands of students who have transformed their lives with our training programs.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}

export default About;
