import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCheck } from "react-icons/fi";
import { FaGraduationCap, FaShoppingCart } from "react-icons/fa";
import { MdOutlineDesignServices, MdSmartToy } from "react-icons/md";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

import p5 from "../assets/p5.png"
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants = {
  hover: {
    y: -8,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const techIcons = {
  "React.js": <SiReact className="text-blue-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "Google Gemini": <span className="text-yellow-400">G</span>,
  "Shadcn": <span className="text-blue-300">S</span>,
  "Cloudinary": <span className="text-blue-500">C</span>,
  "Stripe Payment": <span className="text-purple-500">$</span>,
  "HTML": <span className="text-orange-500">H</span>,
  "CSS": <span className="text-blue-500">C</span>,
  "JavaScript": <span className="text-yellow-400">JS</span>,
  "BootStrap": <span className="text-purple-500">B</span>,
  "Quiz API": <span className="text-green-400">Q</span>,
};

const Projects = () => {
  const projects = [
    {
      year: "2024",
      title: "Career Compass",
      description:
        "AI-powered career guidance platform with community-driven insights. Ideal for schools looking to enhance career counseling.",
      features: [
        "AI Chatbot for personalized guidance",
        "Built-in student community",
        "Comprehensive career path analysis",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini",
        "Shadcn",
      ],
      images: [p5],
      links: {
        live: "https://careercompass.app",
        github: "https://github.com/careercompass",
      },
      icon: <MdSmartToy size={24} />,
      accentColor: "purple",
    },
    {
      year: "2024",
      title: "V-Learn",
      description:
        "Your go-to platform for personalized training at home — yoga, driving, cooking, fitness, and more with expert trainers.",
      features: [
        "Book trainers based on ratings",
        "Secure payment integration",
        "Wide skill categories",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Stripe Payment",
      ],
      images: [p3],
      links: {
        live: "https://v-learn-platform.onrender.com/",
        github: "https://github.com/Himender-Singh/v-learn",
      },
      icon: <MdOutlineDesignServices size={24} />,
      accentColor: "orange",
    },
    {
      year: "2024",
      title: "ShopSwift",
      description:
        "Premium e-commerce experience with blazing performance, personalized recommendations, and seamless checkout.",
      features: [
        "AI-powered recommendations",
        "3D product previews",
        "One-click checkout",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini",
        "Shadcn",
      ],
      images: [p2],
      links: {
        live: "https://shopswift.demo",
        github: "https://github.com/shopswift",
      },
      icon: <FaShoppingCart size={24} />,
      accentColor: "blue",
    },
    {
      year: "2023",
      title: "EduKids",
      description:
        "Immersive learning platform for children featuring interactive stories, educational games, and progress tracking.",
      features: [
        "Animated storybooks",
        "Math & literacy games",
        "Stories Section",
        "Drawing Board",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "BootStrap", "Quiz API"],
      images: [p4],
      links: {
        live: "https://idyllic-crumble-387779.netlify.app/",
        github: "https://github.com/edukids",
      },
      icon: <FaGraduationCap size={24} />,
      accentColor: "teal",
    },
  ];

  const colorMap = {
    blue: {
      text: "text-blue-400",
      bg: "bg-blue-950/50",
      border: "border-blue-800/50",
      gradient: "from-blue-500 to-cyan-500",
      button: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
      glow: "hover:shadow-blue-500/20",
    },
    purple: {
      text: "text-purple-400",
      bg: "bg-purple-950/50",
      border: "border-purple-800/50",
      gradient: "from-purple-500 to-pink-500",
      button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      glow: "hover:shadow-purple-500/20",
    },
    teal: {
      text: "text-teal-400",
      bg: "bg-teal-950/50",
      border: "border-teal-800/50",
      gradient: "from-teal-500 to-emerald-500",
      button: "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600",
      glow: "hover:shadow-teal-500/20",
    },
    orange: {
      text: "text-orange-400",
      bg: "bg-orange-950/50",
      border: "border-orange-800/50",
      gradient: "from-orange-500 to-amber-500",
      button: "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
      glow: "hover:shadow-orange-500/20",
    },
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[size:20px_20px] [background-image:linear-gradient(to_right,theme(colors.blue.500)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.blue.500)_1px,transparent_1px)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block mb-4 text-sm font-medium py-2 px-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
          >
            PROJECT SHOWCASE
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight"
          >
            Crafting Digital{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              Experiences
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Innovative solutions that blend technology and design to create meaningful impact.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-28"
        >
          {projects.map((project, index) => {
            const color = colorMap[project.accentColor];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative rounded-3xl ${color.bg} ${color.border} border p-1 backdrop-blur-sm transition-all duration-500 hover:shadow-xl ${color.glow}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  {/* Image section */}
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl aspect-video ${isEven ? "order-1" : "order-2"}`}
                    whileHover="hover"
                  >
                    <div className="absolute z-10 pointer-events-none" />
                    {project.images.map((img, i) => (
                      <motion.div
                        key={i}
                        variants={imageVariants}
                        className="h-full w-full"
                      >
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Content section */}
                  <motion.div
                    className={`space-y-6 p-6 ${isEven ? "order-2 lg:pr-6" : "order-1 lg:pl-6"}`}
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${color.bg} ${color.border} border shadow-lg`}>
                        {React.cloneElement(project.icon, { className: color.text })}
                      </div>
                      <span className={`text-sm font-semibold ${color.text}`}>
                        {project.year}
                      </span>
                    </div>

                    <motion.h3
                      className="text-3xl md:text-4xl font-bold text-white"
                      whileHover={{ x: 5 }}
                    >
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                      </a>
                    </motion.h3>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className={`font-semibold text-lg mb-3 ${color.text} flex items-center gap-2`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-3 text-gray-300"
                              whileHover={{ x: 5 }}
                            >
                              <FiCheck className={`mt-1 ${color.text}`} />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`font-semibold text-lg mb-3 ${color.text} flex items-center gap-2`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              className={`px-3 py-1.5 text-xl ${color.bg} ${color.border} border rounded-full text-gray-300 flex items-center gap-2`}
                              whileHover={{ y: -2 }}
                            >
                              {techIcons[tech] || <span>•</span>}
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 ${color.button} text-white rounded-lg shadow-md hover:shadow-lg transition-all flex-1 sm:flex-none text-center`}
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="flex items-center justify-center gap-2 font-medium">
                          <FiExternalLink />
                          Live Demo
                        </div>
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex-1 sm:flex-none text-center"
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="flex items-center justify-center gap-2 font-medium">
                          <FiGithub />
                          Source Code
                        </div>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;