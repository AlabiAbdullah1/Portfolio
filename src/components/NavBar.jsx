/* eslint-disable react/prop-types */
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 shadow-md select-none">
      <div className="flex justify-between items-center py-4 px-6">
        <div>
          <h2 className="text-white text-2xl font-bold">{`<ABDUL/>`}</h2>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {/* Nav Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link to="/">
            <div className={`tab ${activeTab === "home" ? "active" : ""}`}>
              Portfolio
            </div>
          </Link>
          <Link to="/projects">
            <div className={`tab ${activeTab === "projects" ? "active" : ""}`}>
              Projects
            </div>
          </Link>
          <Link to="/contact">
            <div className={`tab ${activeTab === "contact" ? "active" : ""}`}>
              Contact
            </div>
          </Link>
        </div>
        {/* Social Icons */}
        <div className="hidden md:flex space-x-3">
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
            <Link to="https://github.com/Alabiabdullah1" target="_blank">
              <FaGithub className="text-black w-4 h-4" />
            </Link>
          </div>
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
            <Link
              to="https://www.linkedin.com/in/alabi-abdullahi-7a313523a"
              target="_blank"
            >
              <FaLinkedin className="text-blue-600 w-4 h-4" />
            </Link>
          </div>
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
            <Link to="https://twitter.com/Alabiabdullah1" target="_blank">
              <FaTwitter className="text-blue-400 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 py-4 px-6 bg-gray-800 text-white">
          <Link to="/" onClick={toggleMenu}>
            <div className={`tab ${activeTab === "home" ? "active" : ""}`}>
              Portfolio
            </div>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <div className={`tab ${activeTab === "projects" ? "active" : ""}`}>
              Projects
            </div>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <div className={`tab ${activeTab === "contact" ? "active" : ""}`}>
              Contact
            </div>
          </Link>
          <div className="flex justify-center space-x-3">
            <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
              <Link to="https://github.com/Alabiabdullah1" target="_blank">
                <FaGithub className="text-black w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
              <Link to="https://linkedin.com/in/your-profile" target="_blank">
                <FaLinkedin className="text-blue-600 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
              <Link to="https://twitter.com/Alabiabdullah1" target="_blank">
                <FaTwitter className="text-blue-400 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
