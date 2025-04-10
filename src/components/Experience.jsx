import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRedux, SiMysql, SiOracle } from "react-icons/si";
import { IoTimeOutline } from "react-icons/io5";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa6";

const experienceData = {
  company: "SPIKEAGE IT Company",
  position: "Frontend Web Developer",
  type: "Internship",
  duration: "Jul 2024 - Sep 2024 · 3 mos",
  location: "Bhiwani, Haryana, India · On-site",
  description: [
    "Developed responsive web applications using HTML, CSS with JavaScript",
    "Implemented state management solutions using SQL",
    "Created reusable UI components with Bootstrap",
    "Collaborated with UX designers to implement modern interfaces",
    "Participated in code reviews and agile development processes"
  ],
  technologies: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
    { name: "CSS", icon: <FaCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "Oracle Apex", icon: <SiOracle className="text-red-400" /> },
    { name: "SQL", icon: <SiMysql className="text-green-500" /> }
  ]
};

const Experience = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[size:20px_20px] [background-image:linear-gradient(to_right,theme(colors.gray.500)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.500)_1px,transparent_1px)]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-cyan-400 text-sm font-medium mb-4">
            <FaLaptopCode className="text-lg" /> Professional Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional engagements and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Logo Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-cyan-500/30 transition-colors duration-300"
          >
            <div className="w-32 h-32 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
              <img className="rounded-xl" src="https://media.licdn.com/dms/image/v2/D560BAQEwVwT353Vyqw/company-logo_200_200/B56ZV3rvFqHEAI-/0/1741469709172/spikeage_logo?e=2147483647&v=beta&t=cJQLnR08h_hZdskDZyYGUnalJdlb19w2CkLEHRQm8kc" alt="" />
               {/* Replace with your logo component */}
            </div>
            <h3 className="text-xl font-bold text-center text-white mb-1">
              {experienceData.company}
            </h3>
            <p className="text-gray-400 text-sm text-center">{experienceData.type}</p>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experienceData.position}
                  </h3>
                  <p className="text-gray-400">{experienceData.company}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Internship</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 text-sm">
                  <IoTimeOutline className="text-cyan-400" />
                  {experienceData.duration}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 text-sm">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {experienceData.location}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FaCode className="text-cyan-400" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {experienceData.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-cyan-400 mt-1">
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                          <path d="M4 6L6 8L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {experienceData.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 text-xl">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;