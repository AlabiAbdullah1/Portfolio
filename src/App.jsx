import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:9000/portfolio").then((response) => {
      setPortfolioData(response.data[0]);
      console.log(response.data[0]);
    });
  }, []);

  if (!portfolioData) return <div>Loading...</div>;

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home portfolioData={portfolioData} />} />
          <Route
            path="/projects"
            element={<Projects projects={portfolioData.projects} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
