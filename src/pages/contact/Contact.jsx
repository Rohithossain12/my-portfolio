import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-800 py-10  rounded-lg">
      <h1 className="text-3xl text-white font-bold mb-8 text-center">
        Contact Information
      </h1>
      <div className="container mx-auto rounded-lg p-8">
        <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 lg:justify-between">
          {/* Left Section: Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            {/* Email Address */}
            <div className="flex items-center space-x-4">
              <MdLocationOn className="text-3xl text-red-500" />
              <div>
                <h2 className="text-xl font-semibold text-white">Location</h2>
                <p className="text-lg text-white">Pabna,Dahaka,Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdEmail className="text-3xl text-yellow-500" />
              <div>
                <h2 className="text-xl text-white font-semibold">Email Address</h2>
                <p className="text-lg text-white">
                  You can reach me at my email:{" "}
                  <a
                    href="mailto:rafidislamrohit576@gmail.com"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    rafidislamrohit576@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-4">
              <MdPhone className="text-3xl text-blue-500" />
              <div>
                <h2 className="text-xl font-semibold text-white">Phone Number</h2>
                <p className="text-lg text-white">
                  Feel free to call me at:{" "}
                  <a
                    href="tel:+8801646151022"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    +8801646151022
                  </a>
                </p>
              </div>
            </div>

            {/* WhatsApp Number */}
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-3xl text-green-500" />
              <div>
                <h2 className="text-xl text-white font-semibold">WhatsApp</h2>
                <p className="text-lg text-white">
                  You can also message me on WhatsApp:{" "}
                  <a
                    href="https://wa.me/01761667914"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    +8801761667914
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Optional Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-white">Send a Message</h2>
            <form className="space-y-4 ">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered text-black w-full mb-4"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full mb-4"
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full mb-4"
              />
              <button type="submit" className="btn btn-primary w-full py-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
