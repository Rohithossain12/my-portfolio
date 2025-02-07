import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-gray-800 text-white rounded-lg py-10  px-4 sm:px-6 md:px-8"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-500 mb-6">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
            {/* Programming Journey */}
            <div className="md:w-1/2">
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="text-2xl font-semibold text-purple-300 mb-3"
              >
                My Programming Journey
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="text-lg sm:text-xl leading-relaxed"
              >
                I started my programming journey a few years ago, learning web
                development. Over time, I’ve gained proficiency in JavaScript,
                React, Node.js,express,mongodb, nextjs,and more, and I continue
                to grow by exploring new technologies.
              </motion.p>
            </div>

            {/* Type of Work I Enjoy */}
            <div className="md:w-1/2">
              <motion.h3
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="text-2xl font-semibold text-purple-300 mb-3"
              >
                The Type of Work I Enjoy
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                transition={{ duration: 1.5, delay: 0.7 }}
                className="text-lg sm:text-xl leading-relaxed"
              >
                I enjoy building interactive and responsive user interfaces,
                particularly with React for the front end. I’m passionate about
                creating seamless user experiences, crafting pixel-perfect
                designs, and optimizing performance for web applications. My
                focus is on delivering intuitive, accessible, and scalable
                solutions that enhance user engagement.
              </motion.p>
            </div>
          </div>

          <div className="mt-12">
            {/* Hobbies or Interests */}
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
              transition={{ duration: 1.5, delay: 0.9 }}
              className="text-2xl font-semibold text-purple-300 mb-3"
            >
              Hobbies & Interests
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="text-lg sm:text-xl leading-relaxed"
            >
              Outside of programming, I am passionate about sports, especially
              football. I also enjoy painting and exploring different cultures
              through travel and photography.
            </motion.p>
          </div>

          <div className="mt-12">
            {/* Showcase Personality */}
            <motion.h3
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="text-2xl font-semibold text-purple-300 mb-3"
            >
              Showcase My Personality
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
              transition={{ duration: 1.5, delay: 1.3 }}
              className="text-lg sm:text-xl leading-relaxed"
            >
              I am a quick learner, always curious and passionate about solving
              problems. I thrive in collaborative environments and enjoy the
              process of building things from scratch.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
