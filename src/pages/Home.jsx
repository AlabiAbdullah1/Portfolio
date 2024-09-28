/* eslint-disable react/prop-types */
import { FaCode, FaReact, FaNodeJs, FaServer } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";

const Home = ({ portfolioData }) => {
  const skillIcons = {
    JavaScript: <FaCode className="text-yellow-500" />,
    React: <FaReact className="text-blue-500" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    "Express.js": <FaServer className="text-gray-600" />,
    MongoDB: <SiMongodb className="text-green-700" />,
    MySQL: <SiMysql className="text-blue-600" />,
    PostgreSQL: <SiPostgresql className="text-blue-400" />,
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center select-none">
      {/* Container */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 text-center transition transform duration-500 hover:scale-105">
        <div className="flex justify-end mb-2   ">
          <button className="border border-gray-500 font-semibold text-lg rounded-lg py-2 px-2  h-15 w-30 bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500 hover:bg-slate-400 ">
            <a
              href="https://drive.google.com/file/d/15vGGS2GWPq29A4qsIdLTGIvzmIbLUUyl"
              target="blank"
            >
              Resume
            </a>
          </button>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="https://res.cloudinary.com/dhxpbae4c/image/upload/v1727564886/photo_6035327966516461981_y_nhdhfz.jpg"
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover shadow-md border-4 border-white"
          />
        </div>

        {/* Name and Description */}
        <h1 className="sm:text-4xl text-2xl font-bold text-gray-600 mb-2 animate-fadeInUp">
          {portfolioData.map((portfolio) => portfolio.name)}
        </h1>
        <p className="text-xl text-gray-400 mb-2 animate-fadeInUp animation-delay-200">
          {portfolioData.map((portfolio) => portfolio.description)}
        </p>

        {/* Skills Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6 animate-fadeInUp animation-delay-400">
          Skills
        </h2>

        <ul className="grid grid-cols-2 gap-4 text-left list-none">
          {portfolioData.map((portfolio) =>
            portfolio.skills.map((skill) => (
              <li
                key={skill.id}
                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-md transition transform hover:bg-gray-100 hover:scale-105 animate-fadeInUp animation-delay-600"
              >
                <span className="text-lg">{skillIcons[skill.name]}</span>
                <span className="text-sm sm:text-lg text-gray-700 font-medium">
                  {skill.name}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
