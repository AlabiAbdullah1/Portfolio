/* eslint-disable react/prop-types */
const Projects = ({ projects }) => {
  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow-lg h-100">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">
        Projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((portfolio) =>
          portfolio.projects.map((project, index) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl p-4 relative overflow-hidden cursor-pointer"
            >
              <a
                href={project.link}
                className="flex flex-col h-full justify-between"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-500">
                      Technologies:{" "}
                    </span>
                    <span className="text-gray-700">
                      {project.technologies}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-opacity-10 bg-gray-900 transition-opacity hover:bg-opacity-20"></div>
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Projects;
