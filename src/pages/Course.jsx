import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "MERN Stack Development",
    description: "Learn MongoDB, Express, React, and Node.js to build full-stack web apps.",
    price: "Rs. 15,000",
    img: "https://discoverwebtech.com/wp-content/uploads/2023/12/1686075264316.png "
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Master Python with hands-on projects in data science and machine learning.",
    price: "Rs. 12,000",
    img: "https://blog.secureflag.com/assets/images/python-framework-feature.png"
  },
  {
    id: 3,
    title: "UI/UX Design Bootcamp",
    description: "Design modern user interfaces with Figma, Adobe XD, and UX principles.",
    price: "Rs. 10,000",
    img: "https://sprintscdn-fnh2cugtb8a4deba.z02.azurefd.net/production/store/90058138/1737390237678e789d8b715.png",
  },
  {
    id: 4,
    title: "Java Programming",
    description: "Deep dive into Java programming and object-oriented concepts.",
    price: "Rs. 13,000",
    img: "https://d3hfl9xoa8vpcx.cloudfront.net/Java%20Programming%20Language-A%20Comprehensive%20Guide.jpg"
  },
  {
    id: 5,
    title: "Android App Development",
    description: "Create Android apps using Kotlin and Android Studio.",
    price: "Rs. 14,000",
    img: "https://media.istockphoto.com/id/1196702694/photo/designers-drawing-website-ux-app-development.jpg?b=1&s=612x612&w=0&k=20&c=ZYuGCDVwrYDymSDf15JNMURA7ZihcYGHuzp9BEqJADU=",
  },
  {
    id: 6,
    title: "React Native",
    description: "Build cross-platform mobile apps with React Native.",
    price: "Rs. 13,500",
    img: "https://images-www.contentful.com/fo9twyrwpveg/7ljf5Mk0iWWmNdFRX2l5Ao/f447c60a9932eeda07c6e1c7d86f4e0c/What_are_the_differences_between_React_and_React_Native___1_.png",
   
  },
  {
    id: 7,
    title: "AWS Cloud Practitioner",
    description: "Learn the basics of AWS Cloud and prepare for certification.",
    price: "Rs. 16,000",
    img: "https://careertraining.lewisu.edu/common/images/2/22994/Certified-AWS-Cloud-Practitioner-935x572.jpg",
  },
  {
    id: 8,
    title: "Digital Marketing",
    description: "Master SEO, Google Ads, social media marketing, and more.",
    price: "Rs. 11,000",
    img: "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?b=1&s=612x612&w=0&k=20&c=Q9rpGon6ZqT4yzwgnld4V1Tf7pmr0c8xwUJUlubi4Hc="
  },
  {
    id: 9,
    title: "Data Structures & Algorithms",
    description: "Prepare for coding interviews with in-depth algorithms study.",
    price: "Rs. 14,000",
    img: "https://media.istockphoto.com/id/2012393906/photo/big-data-analysis-with-ai-technology-person-using-machine-learning-and-deep-learning-neural.jpg?s=612x612&w=0&k=20&c=x6GEnjoq6PJR8f5VdlIIGfCuJMEXO4AZZUcbgJC9_HU=",
  },
  {
    id: 10,
    title: "Machine Learning",
    description: "Explore supervised and unsupervised learning with Python.",
    price: "Rs. 18,000",
    img: "https://media.istockphoto.com/id/1166763885/vector/artificial-intelligence-and-automation.jpg?b=1&s=612x612&w=0&k=20&c=DlMGFM6Z3Ga97GIYJG1gdFQCuzegQcbjpRn0D8uCrdg=",
  },
  {
    id: 11,
    title: "Cybersecurity Basics",
    description: "Learn the fundamentals of cybersecurity and ethical hacking.",
    price: "Rs. 12,000",
    img: "https://media.licdn.com/dms/image/sync/v2/D4D27AQGx-YQBYmsBog/articleshare-shrink_800/articleshare-shrink_800/0/1729745351234?e=2147483647&v=beta&t=tapSwt0MSRip-maVysF73Og_BsdTyxcH-BLH3JAesys"
  },
  {
    id: 12,
    title: "SQL & Database Management",
    description: "Master SQL queries and database design principles.",
    price: "Rs. 11,500",
    img: "https://media.istockphoto.com/id/1427143523/photo/two-developer-computer-programmer-working-together-coding-on-laptop-computer-at-home-office.jpg?b=1&s=612x612&w=0&k=20&c=vpoOKahA2uwwBQ2BpdyU6KfNyepgvlVYrWEDoKerFEg=",
  },
  {
    id: 13,
    title: "Blockchain Development",
    description: "Build decentralized apps on Ethereum blockchain.",
    price: "Rs. 20,000",
    img: "https://image.shutterstock.com/image-vector/big-data-3d-digital-cubes-260nw-2524487875.jpg",
  },
  {
    id: 14,
    title: "Docker & Kubernetes",
    description: "Learn containerization and orchestration with Docker & K8s.",
    price: "Rs. 17,000",
    img: "https://e0.pxfuel.com/wallpapers/873/958/desktop-wallpaper-docker-kubernetes.jpg",
  },
  {
    id: 15,
    title: "Angular Framework",
    description: "Develop dynamic web apps using Angular and TypeScript.",
    price: "Rs. 13,000",
    img: "https://swansoftwaresolutions.com/wp-content/uploads/2019/04/The-Fundamentals-of-AngularJS-Framework-in-Programming-1.jpg",
  },
  {
    id: 16,
    title: "DevOps Fundamentals",
    description: "Understand CI/CD pipelines, Jenkins, and automation.",
    price: "Rs. 15,000",
    img: "https://www.qtrainers.com/upload/original-image/2019/04/topic-35975caf1ba10f76d.jpg",
  },
  {
    id: 17,
    title: "Swift for iOS Development",
    description: "Create iOS apps with Swift and Xcode.",
    price: "Rs. 14,500",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*HHLLQYZILJriu5JhGt9X1g.png",
  },
  {
    id: 18,
    title: "WordPress Development",
    description: "Build websites and blogs with WordPress CMS.",
    price: "Rs. 10,500",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rfY3pjwa-Tyc4kJESW2xgcUGwgebQNbo2A&s",
  },
  {
    id: 19,
    title: "PHP & Laravel",
    description: "Backend development with PHP and Laravel framework.",
    price: "Rs. 13,000",
    img: "https://pnp.digital/wp-content/uploads/2021/10/Laravel_Framework-copy-1030x515.webp",
  },
  {
    id: 20,
    title: "Ethical Hacking",
    description: "Become a certified ethical hacker with practical skills.",
    price: "Rs. 18,000",
    img: "https://ccitraining.edu/wp-content/uploads/2019/03/unnamed-11.png",
  },
  {
    id: 21,
    title: "React JS Advanced",
    description: "Deep dive into React hooks, context, and advanced patterns.",
    price: "Rs. 14,000",
    img: "https://wallpaperbat.com/img/860746-react-js-wallpaper.jpg",
  },
  {
    id: 22,
    title: "Flutter Mobile Development",
    description: "Build beautiful mobile apps with Flutter and Dart.",
    price: "Rs. 15,000",
    img: "https://redwerk.com/wp-content/uploads/2019/10/f-image.png",
  },
  {
    id: 23,
    title: "JavaScript Essentials",
    description: "Learn modern JavaScript from basics to ES6+ features.",
    price: "Rs. 12,000",
    img: "https://images.impression.co.uk/2023/11/gabriel-heinzer-g5jpH62pwes-unsplash.jpg?auto=compress%2Cformat&fit=crop&q=65&format=webp?w=755&h=755&q=65",
  },
  {
    id: 24,
    title: "Graphic Design",
    description: "Learn Photoshop, Illustrator, and creative design skills.",
    price: "Rs. 11,000",
    img: "https://image.shutterstock.com/image-photo/ux-developer-ui-designer-brainstorming-260nw-2479369379.jpg",
  },
];

const Course = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-indigo-600">Our Courses</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
          >
            <img
              src={course.img}
              alt={course.title}
              className="rounded-xl object-cover w-full h-48 mb-4"
              loading="lazy"
            />
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-bold">{course.price}</span>
              <button
                onClick={() => navigate("/payment", { state: { totalAmount: course.price } })}
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
