import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "PharmaWorld",
    image: "https://i.ibb.co/JwbL3xYW/Capture-PNGytsfdts.png",
    description: "Multi-Vendor Medicine Selling E-commerce Website",
    liveLink: "https://endearing-fenglisu-dad95b.netlify.app",
    githubLink: "https://github.com/Rohithossain12/medicine-selling-client",
  },
  {
    id: 2,
    name: "Master Chef",
    image: "https://i.ibb.co.com/WNJnqQ3g/Capturdcfvfcde.png",
    description: "Restaurant Management Website 🍽️",
    liveLink: "https://cute-kulfi-0cc763.netlify.app",
    githubLink:
      "https://github.com/Rohithossain12/restaurant-management-client",
  },
  {
    id: 3,
    name: "🏆 Sport Specialist",
    image: "https://i.ibb.co.com/9H8DPyJg/iamge2.png",
    description: "Sports Equipment Online Store",
    liveLink: "https://animated-pika-7436f2.netlify.app",
    githubLink:
      "https://github.com/Rohithossain12/sports-equipment-online-store-client",
  },
];

const Projects = () => {
  return (
    <div className="py-10 bg-gray-800 rounded-lg">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        My Projects
      </h1>
      <div className="container mb-10 mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-4 ">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <Link
                to={`/projectDetails/${project.id}`}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View More
              </Link>
            </div>
            {/* Live Link and GitHub Link */}
            <div className="mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mr-4"
              >
                Live Project
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
