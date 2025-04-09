import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap, FaAward } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const educationData = [
  {
    institute: "The Technological Institute of Textiles & Sciences",
    degree: "B.Tech, Computer Science",
    duration: "Aug 2022 - Aug 2026",
    grade: "A++",
    score: "CGPA: 8.6 (till 5th semester)",
    icon: <FaUniversity />,
    highlights: [
      "Specialization in AI & Machine Learning",
      "President of Coding Club",
      "Published 2 research papers"
    ]
  },
  {
    institute: "Govt. Model Sanskriti Sr. Sec. School",
    degree: "12th Class - Non-Medical",
    duration: "2020 - 2022",
    grade: "A++",
    score: "Marks: 87.2%",
    icon: <FaSchool />,
    highlights: [
      "School Topper in Mathematics",
      "Represented school in National Science Olympiad"
    ]
  },
  {
    institute: "Bharti High School, Bhiwani",
    degree: "10th",
    duration: "Apr 2019 - May 2020",
    grade: "A++",
    score: "Marks: 86.6%",
    icon: <FaSchool />,
    highlights: [
      "Gold Medal in Science Exhibition",
      "Member of Student Council"
    ]
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.15, 
      type: "spring", 
      stiffness: 100,
      damping: 10
    },
  }),
};

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gray-950 text-gray-100 py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[size:20px_20px] [background-image:linear-gradient(to_right,theme(colors.gray.400)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.400)_1px,transparent_1px)]"></div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/5"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-cyan-400 text-sm font-medium mb-4">
            <MdOutlineWorkspacePremium className="text-lg" /> Academic Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Qualifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My formal education path and academic achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="group relative"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={i}
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${i === 0 ? 'from-cyan-500/30 to-blue-600/30' : 'from-gray-700/30 to-gray-800/30'} opacity-0 group-hover:opacity-100 blur-md transition duration-500`}></div>
              
              <div className={`relative bg-gray-900/80 border ${i === 0 ? 'border-cyan-500/20' : 'border-gray-800'} rounded-2xl overflow-hidden h-full transition-all duration-300 group-hover:border-cyan-500/40`}>
                <div className="absolute inset-0 [background:radial-gradient(200px_circle_at_var(--x,_0px)_var(--y,_0px),theme(colors.cyan.500/10),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ '--x': '100px', '--y': '100px' }}
                />
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-lg ${i === 0 ? 'bg-cyan-500/10 text-cyan-400' : 'bg-gray-800 text-gray-300'} text-xl shrink-0 transition-colors duration-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-400`}>
                      {edu.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {edu.institute}
                        </h3>
                        {i === 0 && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium">
                            <FaGraduationCap className="text-xs" /> Ongoing
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-800">
                          <IoTimeOutline className="text-cyan-400 text-xs" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-800">
                          <FaAward className="text-yellow-400 text-xs" />
                          {edu.grade} • {edu.score}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 font-medium mb-5">{edu.degree}</p>
                      
                      {edu.highlights && edu.highlights.length > 0 && (
                        <div className="mt-5 pt-5 border-t border-gray-800/50">
                          <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 12 12" fill="none">
                              <path d="M4 6L6 8L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Key Achievements
                          </h4>
                          <ul className="space-y-2.5">
                            {edu.highlights.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                <span className="text-cyan-400 mt-1.5">
                                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 2L10 6L6 10L2 6L6 2Z" fill="currentColor"/>
                                  </svg>
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;