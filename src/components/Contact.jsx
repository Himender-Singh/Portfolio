import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    // Initialize EmailJS (you only need to do this once in your app)
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID); // Replace with your EmailJS public key
   
   
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );
      
      setStatus({ submitting: false, success: true, error: false });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block mb-4 text-sm font-medium py-2 px-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Connect</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Drop me a message!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <FiMail className="text-cyan-400" />
              Send Me a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    status.submitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/20'
                  }`}
                >
                  {status.submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
                
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center gap-2 text-green-400 bg-green-900/30 px-4 py-3 rounded-lg border border-green-800/50"
                  >
                    <FiCheck className="text-lg" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center gap-2 text-red-400 bg-red-900/30 px-4 py-3 rounded-lg border border-red-800/50"
                  >
                    <FiAlertCircle className="text-lg" />
                    Oops! Something went wrong. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Email</h3>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      himendersingh@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Location</h3>
                    <p className="text-gray-400">Bhiwani, Haryana, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      +91 7206708185
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Connect With Me
              </h2>
              
              <div className="flex flex-wrap gap-4">
              <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/Himender-Singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-gray-600/20 hover:bg-gray-600/30 text-gray-50 rounded-full border border-gray-600/30 transition-all"
                >
                  <FaGithub className="text-3xl" />
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/himender-singh-54ba88282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-50 rounded-full border border-blue-600/30 transition-all"
                >
                  <FaLinkedin className="text-3xl" />
                  LinkedIn
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://twitter.com/HimenderSngh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-black/20 hover:bg-gray-600/30 text-sky-50 rounded-full border border-sky-600/30 transition-all"
                >
                  <FaTwitter className="text-3xl" />
                  Twitter
                </motion.a>

                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://wa.me/7206708185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-green-600/20 hover:bg-green-600/30 text-white rounded-full border border-sky-600/30 transition-all"
                >
                  <FaWhatsapp className="text-3xl" />
                  Whatsapp
                </motion.a>

                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://mail.google.com/mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-orange-600/20 hover:bg-orange-600/30 text-white rounded-full border border-sky-600/30 transition-all"
                >
                  <SiGmail className="text-3xl" />
                  Gmail
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;