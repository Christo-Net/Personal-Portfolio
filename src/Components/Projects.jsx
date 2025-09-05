import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaFilter, 
  FaReact, 
  FaNodeJs, 
  FaCss3Alt, 
  FaJs,
  FaPython,
  FaHtml5,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si';
import SMFestImg from '../assets/smfest.png'
import WeatherImg from '../assets/weather.png'
import CarveoImg from '../assets/carveo.png'
import MarkattendImg from '../assets/markattend.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Project data
  const projects = [
    {
      id: 1,
      title: "Car Veo",
      description: "A full-stack Car rental website solution with payment integration and admin dashboard.",
      image: CarveoImg,
      technologies: ["React", "CSS", "Tailwind CSS"],
      category: "frontend",
      liveLink: "https://carvoe-car-rental.vercel.app",
      githubLink: "https://github.com/Christo-Net/Carvoe-Car-Rental.git"
    },
    {
      id: 2,
      title: "SM Fest",
      description: "A website focused on digital innovation, social media, and entrepreneurship",
      image: SMFestImg,
      technologies: ["HTML", "CSS"],
      category: "frontend",
      liveLink: "https://christo-net.github.io/smfest-clone-by-Christopher/",
      githubLink: "https://github.com/Christo-Net/smfest-clone-by-Christopher.git"
    },
    {
      id: 3,
      title: "Attendance Management Dashboard",
      description: "An attendance management system with QR code scanning and dashboard features.",
      image: MarkattendImg,
      technologies: ["React",'CSS',"Tailwind CSS", "QR code scanner"],
      category: "fullstack",
      liveLink: "https://markattend.vercel.app",
      githubLink: "https://github.com/Christo-Net/Attendance-Management-Platform.git"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather information with interactive maps and forecasts.",
      image: WeatherImg,
      technologies: ["JavaScript", "CSS", "HTML"],
      category: "frontend",
      liveLink: "https://christo-net.github.io/Weather-App/",
      githubLink: "https://github.com/Christo-Net/Weather-App.git"
    }

  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  // Filter projects based on category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Technology icons mapping
  const techIcons = {
    React: <FaReact className="text-blue-400" />,
    'Node.js': <FaNodeJs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    Python: <FaPython className="text-blue-600" />,
    'Next.js': <SiNextdotjs className="text-black" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    'QR code scanner': null // No icon for this
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const projectCardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate with EmailJS or another service
    // For demo, just console log and close modal
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setShowContactModal(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='projects' className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my recent work that showcases my skills in web development and design
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex justify-center flex-wrap gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
                activeFilter === category.id
                  ? 'bg-sky-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              <FaFilter className="text-sm" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectCardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                className="bg-gray-800 rounded-xl overflow-hidden"
              >
                {/* Project image with link */}
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block h-48 overflow-hidden"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 transition-opacity hover:opacity-0"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </a>

                {/* Project details */}
                <div className="p-6">
                  <p 
                    className="text-gray-400 mb-4 cursor-pointer hover:text-white transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-1"
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex justify-between">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal content */}
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <button 
                      className="text-gray-400 hover:text-white text-3xl"
                      onClick={() => setSelectedProject(null)}
                    >
                      &times;
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-1"
                        >
                          {techIcons[tech]}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={selectedProject.githubLink} 
                      className="px-6 py-2 bg-gray-700 rounded-lg flex items-center gap-2 hover:bg-gray-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      View Code
                    </a>
                    <a 
                      href={selectedProject.liveLink} 
                      className="px-6 py-2 bg-sky-500 rounded-lg flex items-center gap-2 hover:bg-sky-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Modal */}
        <AnimatePresence>
          {showContactModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setShowContactModal(false)}
            >
              <motion.div
                variants={modalVariants}
                className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl max-w-lg w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 relative">
                  <button 
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl"
                    onClick={() => setShowContactModal(false)}
                  >
                    &times;
                  </button>
                  
                  <motion.h3 
                    className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Get In Touch
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    I'd love to hear from you! Drop me a message.
                  </motion.p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={formFieldVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                      <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div variants={formFieldVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                      <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div variants={formFieldVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
                      <label className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                      <div className="relative">
                        <FaCommentDots className="absolute left-3 top-4 text-gray-500" />
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all min-h-[120px]"
                          placeholder="Your message here..."
                          required
                        />
                      </div>
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-sky-600 hover:to-purple-700 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      variants={formFieldVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.6 }}
                    >
                      <FaPaperPlane />
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your next project to life with clean code and creative solutions.
          </p>
          <motion.button
            onClick={() => setShowContactModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-sky-500 rounded-lg font-semibold hover:bg-sky-600 transition-colors"
          >
            Get In Touch
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;