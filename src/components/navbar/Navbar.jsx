import { useState } from "react";
import image from "../../assets/174131581.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* <h1 className="text-2xl font-bold">My Portfolio</h1> */}
        <img className="w-12 h-12 rounded-full" src={image} alt="" />

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul
          className={`flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="text-center">
            <a href="#home" className="cursor-pointer hover:text-gray-300">
              Home
            </a>
          </li>
          <li className="text-center">
            <a href="#about" className="cursor-pointer hover:text-gray-300">
              About Me
            </a>
          </li>
          <li className="text-center">
            <a href="#skills" className="cursor-pointer hover:text-gray-300">
              Skills
            </a>
          </li>
          <li className="text-center">
            <a href="#projects" className="cursor-pointer hover:text-gray-300">
              Projects
            </a>
          </li>
          <li className="text-center">
            <a href="#contact" className="cursor-pointer hover:text-gray-300">
              Contact
            </a>
          </li>
          <li className="text-center">
            <a
              href="/resume.pdf"
              download
              className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
