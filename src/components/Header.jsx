import React, { useState } from 'react';
import { FaUserAstronaut, FaTimes } from 'react-icons/fa';
import { FaDownload, FaFilePdf } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'; // Adjust the path to your logo image

const Header = () => {
  const [showResume, setShowResume] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Replace with your actual resume PDF URL
  const resumeUrl = "https://drive.google.com/file/d/1IDeyn-ChgR5k65haQrBstM9jbKs3pTCG/preview";

  return (
    <>
      <header className="bg-transparent text-white sticky top-0 z-50 border-b border-gray-800/50 shadow-xl backdrop-blur-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
          {/* Logo with animated hover effect */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            
            <motion.span 
              className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 hidden sm:block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img src={logo} alt="" className='w-36' />
            </motion.span>
          </motion.div>

          {/* Resume button with animated download icon */}
          <motion.button
            onClick={() => setShowResume(true)}
            title="View Resume"
            className="group cursor-pointer relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-md hover:shadow-cyan-500/20"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Resume"
          >
            <span className="text-sm font-medium text-cyan-100 hidden sm:inline">View Resume</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaDownload className="text-lg text-cyan-300 group-hover:text-cyan-100" />
            </motion.div>
          </motion.button>
        </div>
      </header>

      {/* Animated Resume Preview Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 cursor-pointer backdrop-blur-lg flex items-center justify-center z-[9999] p-4"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-5xl h-[45rem] bg-gray-900 rounded-xl shadow-2xl overflow-auto border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700/50">
                <div className="flex items-center gap-2">
                  <FaFilePdf className="text-red-500 text-xl" />
                  <span className="font-medium text-gray-200">Resume Preview</span>
                </div>
                <motion.button
                  onClick={() => setShowResume(false)}
                  className="p-1 rounded-full hover:bg-gray-700/50 transition-colors"
                  whileHover={{ rotate: 90 }}
                  aria-label="Close"
                >
                  <FaTimes className="text-gray-400 hover:text-white text-xl" />
                </motion.button>
              </div>

              {/* PDF Preview with loading state */}
              <div className="relative w-full h-full">
                <iframe
                  src={resumeUrl}
                  title="Resume Preview"
                  className="w-full h-full border-0"
                  allow="autoplay"
                  loading="lazy"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full mb-4"></div>
                    <span className="text-gray-300">Loading resume...</span>
                  </div>
                </div> */}
              </div>

              {/* Download Button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={resumeUrl.replace('/preview', '/view?usp=sharing')}
                  download="Himender_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;