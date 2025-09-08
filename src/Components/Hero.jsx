import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImg from '../assets/heroImg.png'

const Hero = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Text for the typewriter effect
  const texts = ['Web Hosting', 'Website Development', 'High design fidelity'];

  // Typewriter effect implementation
  useEffect(() => {
    const handleTyping = () => {
      const current = textIndex % texts.length;
      const fullText = texts[current];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, typingSpeed]);

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
      transition: {
        duration: 0.2
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    }),
    hover: {
      scale: 1.05,
      color: "#ffffff",
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  // const navItems = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <div className='flex justify-between px-6 py-7 md:px-20 w-full items-center'>
        <motion.div 
          className='text-white text-xl md:text-2xl font-mono cursor-pointer'
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          CHRISTO NET
        </motion.div>

        <div>
          <motion.ul 
            className='list-none hidden md:flex gap-8 text-gray-400 items-center'
            initial="hidden"
            animate="visible"
          >
            
              <motion.li 
                variants={menuItemVariants}
                whileHover="hover"
              >
                <a 
                  href="#home"
                  className='cursor-pointer transition-colors hover:text-white'
                >
                  HOME
                </a>
              </motion.li>
              <motion.li 
                variants={menuItemVariants}
                whileHover="hover"
              >
                <a 
                  href="#about"
                  className='cursor-pointer transition-colors hover:text-white'
                >
                  ABOUT
                </a>
              </motion.li>
              <motion.li 
                variants={menuItemVariants}
                whileHover="hover"
              >
                <a 
                  href="#projects"
                  className='cursor-pointer transition-colors hover:text-white'
                >
                  PROJECT
                </a>
              </motion.li>
              <motion.li 
                variants={menuItemVariants}
                whileHover="hover"
              >
                  <a 
                  href="#contact"
                  className='cursor-pointer transition-colors hover:text-white'
                >
                  CONTACT
                </a>
              </motion.li>

               
               
              
          
          </motion.ul>

          <motion.button 
            onClick={() => setIsToggled(!isToggled)} 
            className='md:hidden text-gray-400'
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode='wait' initial={false}>
              {isToggled ? (
                <motion.div
                  key="close-icon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu-icon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {isToggled && (
              <motion.div 
                className='md:hidden fixed top-20 left-0 w-full bg-gray-800 z-50 overflow-hidden'
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <ul className='list-none flex flex-col items-center gap-6 text-gray-400 py-6'>
                    <motion.li 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.3
                        }
                      }}
                      whileHover={{ color: "#ffffff" }}
                      className='cursor-pointer py-2 text-lg'
                    ><a 
                        href="#home"
                        className='cursor-pointer transition-colors hover:text-white'
                      >
                        HOME
                      </a>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.3
                        }
                      }}
                      whileHover={{ color: "#ffffff" }}
                      className='cursor-pointer py-2 text-lg'
                    >  <a 
                      href="#about"
                      className='cursor-pointer transition-colors hover:text-white'
                    >
                      ABOUT
                    </a>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.3
                        }
                      }}
                      whileHover={{ color: "#ffffff" }}
                      className='cursor-pointer py-2 text-lg'
                    > <a 
                      href="#projects"
                      className='cursor-pointer transition-colors hover:text-white'
                    >
                      PROJECT
                    </a>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.3
                        }
                      }}
                      whileHover={{ color: "#ffffff" }}
                      className='cursor-pointer py-2 text-lg'
                    ><a 
                      href="#contact"
                      className='cursor-pointer transition-colors hover:text-white'
                    >
                      CONTACT
                    </a>
                    </motion.li>

                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hero Content */}
      <div id='home' className='flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20'>
        <div className='text-white md:w-1/2 mb-12 md:mb-0'>
          <h1 className='text-5xl md:text-6xl font-bold mb-2'>Hello<span className='text-sky-500'>.</span></h1>
          
          <div className='flex gap-4 items-center mb-6 font-mono text-xl'>
            <div className='border-b-2 border-sky-500 w-16'></div>
            <p>I'm Christopher</p>
          </div>
          
          <h1 className='text-4xl md:text-5xl font-bold mb-8'>Software Developer</h1>
          
          {/* Typewriter text */}
          <div className='flex items-center mb-10'>
            <div className='border-b-2 border-sky-500 w-12 mr-4'></div>
            <span className='text-2xl md:text-3xl font-bold text-sky-500'>
              {currentText}
              <span className='blinking-cursor'>|</span>
            </span>
          </div>
          
          <div className='flex flex-col sm:flex-row gap-5 mt-8'>
            <motion.button 
              className='bg-sky-500 py-3 px-6 text-white font-semibold rounded-lg'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Got a project?
            </motion.button>
            <motion.button 
              className='border-2 border-sky-500 py-3 px-6 text-white font-semibold rounded-lg'
              whileHover={{ scale: 1.05, backgroundColor: "rgba(244, 108, 90, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact">
              Hire me!
              </a>
            </motion.button>
          </div>
        </div>

        {/* Profile Image */}
        <motion.div 
          className='relative md:w-1/2 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            {/* Gradient border effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-sky-500 to-purple-600 rounded-full blur-md opacity-70'></div>
            
            {/* Main image with circular mask */}
                  <img src={HeroImg} alt="Hero Image" className="w-[100%] h-110 object-cover absolute -top-30 left-4 rounded-b-4xl " />
            {/* <div className='rounded-full p-1 bg-gradient-to-br from-sky-500 to-purple-600'>

            </div> */}
              {/* <div className='w-full h-full rounded-full bg-gray-700 overflow-hidden border-4 border-gray-800'>

              </div> */}
                {/* <div className="w-100 h-80 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">

                </div> */}
            
            {/* Decorative elements */}
            <motion.div 
              className='absolute -top-5 -right-5 w-20 h-20 rounded-full border-2 border-sky-500 opacity-50'
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className='absolute -bottom-5 -left-5 w-14 h-14 rounded-full border-2 border-purple-600 opacity-50'
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className='bg-gray-900 px-6 py-8 mt-10 md:mt-20'>
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-center text-gray-400 text-lg mb-6'>TECHNOLOGIES I WORK WITH</h3>
          <ul className='list-none flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 text-sm md:text-base'>
            {["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "Git", "GitHub"].map((tech, index) => (
              <motion.li 
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ color: "#ffffff", scale: 1.1 }}
                className='cursor-pointer bg-gray-800 px-4 py-2 rounded-lg'
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
          margin-left: 2px;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default Hero;