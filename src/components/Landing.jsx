import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Himender-Singh",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/himender-singh-54ba88282/",
    label: "LinkedIn",
  },
  {
    icon: <SiLeetcode />,
    url: "https://leetcode.com/HIMENDER",
    label: "LeetCode",
  },
  {
    icon: <SiGeeksforgeeks />,
    url: "https://www.geeksforgeeks.org/user/himanshuw1q6/",
    label: "GFG",
  },
  {
    icon: <FaXTwitter />,
    url: "https://x.com/HimenderSngh",
    label: "X",
  },
];

const Landing = () => {
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    document.body.style.overflow = canScroll ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [canScroll]);

  const handleViewWorkClick = () => {
    setCanScroll(true);
    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }
    }, 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const skills = [
    { name: "C++", color: "text-blue-400" },
    { name: "HTML", color: "text-orange-500" },
    { name: "CSS", color: "text-blue-500" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "React.js", color: "text-cyan-400" },
    { name: "Node.js", color: "text-green-500" },
    { name: "MongoDB", color: "text-green-400" },
    { name: "Express.js", color: "text-gray-300" },
    { name: "C", color: "text-blue-300" },
  ];

  const infiniteSlide = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-black to-[#181919] relative">
      {/* Floating Social Links */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <div className="p-4 bg-black/80 hover:bg-white transition-all duration-300 ease-in-out rounded-full flex flex-col gap-6 text-white text-3xl hover:text-black shadow-lg">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              whileHover={{ scale: 1.3, x: 8 }}
              className="transition-all duration-100 ease-in-out"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Animated Content */}
      <motion.div
        className="max-w-screen-lg w-full px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* First Name */}
        <motion.div
          className="text-center font-extrabold text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none"
          variants={itemVariants}
        >
          <motion.span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            animate={{
              scale: [1, 1.02, 1],
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            Himender
          </motion.span>
        </motion.div>

        {/* Skills Slider */}
        <motion.div
          className="h-24 rounded-full my-6 overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
          variants={itemVariants}
        >
          <motion.div
            className="h-full"
            variants={infiniteSlide}
            animate="animate"
          >
            <div className="flex items-center h-full">
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="mx-8 flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className={`text-2xl font-bold ${skill.color}`}>
                    {skill.name}
                  </span>
                  <motion.div
                    className="h-1 w-full bg-gray-700 mt-2 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className={`h-full ${skill.color.replace(
                        "text",
                        "bg"
                      )} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Last Name */}
        <motion.div
          className="text-center font-extrabold text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none"
          variants={itemVariants}
        >
          <motion.span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
            animate={{
              scale: [1, 1.02, 1],
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
          >
            Singh
          </motion.span>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center flex justify-center items-center"
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.button
            onClick={handleViewWorkClick}
            className="px-8 py-3 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(45deg, #7c3aed, #ec4899)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work <AiOutlineDown size={20} className="animate-bounce" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(700)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 10 + 2,
              height: Math.random() * 100 + 2,
            }}
            animate={{
              y: [0, Math.random() * 1000 - 50],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
