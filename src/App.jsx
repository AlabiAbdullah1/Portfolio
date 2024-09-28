import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Loading from "./components/Loading";

const portfolio = [
  {
    name: "Alabi Abdullahi Ayodeji",
    description: "Software Engineer",
    skills: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "React" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Express.js" },
      { id: 5, name: "MongoDB" },
      { id: 6, name: "MySQL" },
      { id: 7, name: "PostgreSQL" },
    ],
    projects: [
      {
        name: "Health and Beauty plus",
        description:
          "developed a fully responsive e-commerce platform using React.js, focused on delivering an engaging shopping experience. This project features a clean and user-friendly interface, allowing users to effortlessly browse and filter a diverse selection of products.",
        technologies: "React",
        link: "https://www.healthandbeautyplus.online/",
      },
      {
        name: "Eventful",
        description:
          "I developed an event ticket booking platform that enables users to effortlessly sign up for events, manage their registrations, and receive a unique barcode as proof of attendance. This project integrates a user-friendly interface with robust backend functionality, ensuring a seamless experience from registration to event entry.",
        technologies: "React, Node.js, MongoDB",
        link: "https://eventful-zeta.vercel.app/",
      },
      {
        name: "JoyfulJots",
        description:
          "This project is a birthday reminder and email notification system built with Node.js and Express, integrated with MongoDB for database management. It is designed to automatically send personalized birthday greetings to registered users via email on their birthday. The system runs a scheduled job daily at 7:00 AM, checking user records for any birthdays that match the current date.",
        technologies: "Node.js, MongoDB, EJS",
        link: "https://joyfuljots.onrender.com/register",
      },
      {
        name: "MovieDB",
        description:
          "This project is a dynamic movie discovery platform built with JavaScript, utilizing The Movie Database (TMDB) API to provide users with up-to-date information on movies, including details such as ratings, descriptions, trailers, and release dates. The platform allows users to explore popular movies, search for specific titles, and view detailed information about each film.",
        technologies: "Javascript, TMDB API",
        link: "https://moviedb-ltx4.onrender.com/",
      },
    ],
  },
];

function App() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    setPortfolioData(portfolio);
  }, []);

  if (!portfolioData) return <Loading />;

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home portfolioData={portfolioData} />} />
          <Route
            path="/projects"
            element={<Projects projects={portfolioData} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
