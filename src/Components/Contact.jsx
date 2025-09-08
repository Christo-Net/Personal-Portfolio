import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaEnvelope, 
  FaCommentDots, 
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init({
      publicKey: 'Sx9yBDHNlgUpcKxA_', 
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    emailjs.sendForm('service_qhmpefj', 'template_thg0cz3', e.target)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id='contact' className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white flex items-center justify-center py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-sky-500" />
                ifeanyichristopher63@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaUser className="text-sky-500" />
                +234 7044629606
              </p>
            </div>
            <h3 className="text-xl font-semibold mt-8 mb-4">Connect with me</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Christo-Net" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/christopher-ifeanyichukwu-423a43367/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/Networklord1/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl"
          >
            <div className="space-y-6">
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
              
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-4 text-gray-500" />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all min-h-[150px]"
                  placeholder="Your message here..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-sky-600 hover:to-purple-700 transition-all disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>

            {status && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 text-center ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;