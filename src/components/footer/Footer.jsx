import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-blue-700 font-bold">
          Designed and Developed by Rohit Hossain
        </p>
        <p className="text-blue-700 font-bold mt-2 md:mt-0">
          Copyright © {currentYear} All right reserved by Rohit
        </p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/Rohithossain12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 border-2 border-purple-400 p-2 rounded-full hover:bg-purple-100"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-hossain-4b21281b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 border-2 border-purple-400 p-2 rounded-full hover:bg-purple-100"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/rafid.islam.96199"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 border-2 border-purple-400 p-2 rounded-full hover:bg-purple-100"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="mailto:rafidislamrohit576@gmail.com"
            className="text-purple-600 border-2 border-purple-400 p-2 rounded-full hover:bg-purple-100"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="tel:+8801646-151022"
            className="text-purple-600 border-2 border-purple-400 p-2 rounded-full hover:bg-purple-100"
          >
            <FaPhone size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
