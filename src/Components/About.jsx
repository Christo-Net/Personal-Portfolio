import React from 'react';
import { 
  FaCode, 
  FaClone, 
  FaServer, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa';

const About = () => {
  return (
    <div id='about' className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <div className='grid md:grid-cols-2 lg:grid-cols-2 p-10 md:p-20 text-white gap-10 md:gap-20'>
        {/* Services Section */}
        <div className='grid gap-10'>
          <div className='relative border-l-[3px] border-sky-500 p-5 flex items-start gap-5'>
            <div className='text-sky-500 text-2xl mt-1'>
              <FaCode />
            </div>
            <div>
              <h3 className='text-xl font-bold mb-2'>Website Development</h3>
              <p className='text-gray-400'>Custom, responsive websites built with modern technologies and best practices.</p>
            </div>
            <span className='absolute -bottom-3 -left-2 w-4 h-4 bg-sky-500 rounded-full'></span>
          </div>

          <div className='relative border-l-[3px] border-sky-500 p-5 flex items-start gap-5'>
            <div className='text-sky-500 text-2xl mt-1'>
              <FaClone />
            </div>
            <div>
              <h3 className='text-xl font-bold mb-2'>High design fidelity</h3>
              <p className='text-gray-400'>Recreating existing websites with high-fidelity, ensuring visual parity with the existing brand identity across all devices.</p>
            </div>
            <span className='absolute -bottom-3 -left-2 w-4 h-4 bg-sky-500 rounded-full'></span>
          </div>

          <div className='relative border-l-[3px] border-sky-500 p-5 flex items-start gap-5'>
            <div className='text-sky-500 text-2xl mt-1'>
              <FaServer />
            </div>
            <div>
              <h3 className='text-xl font-bold mb-2'>Website Hosting</h3>
              <p className='text-gray-400'>Deployment and maintenance solutions for your web projects.</p>
            </div>
            <span className='absolute -bottom-3 -left-2 w-4 h-4 bg-sky-500 rounded-full'></span>
          </div>
        </div>

        {/* About Me Section */}
        <div className='grid gap-8'>
          <div className='grid gap-5'>
            <h1 className='text-4xl font-bold font-mono'>About Me</h1>
            <p className='text-gray-300 leading-7'>
                I'm Chris a passionate Front_End web Developer, with expertise in creating modern, responsive websites.
              With a focus on clean code and user experience, I bring ideas to life through thoughtful design and 
              technical excellence. I enjoy solving problems and continuously learning new technologies 
              to stay at the forefront of web development.
            </p>
          </div>

          {/* Stats Section */}
          <div className='flex flex-wrap justify-center gap-8 mt-5'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold text-sky-500'>6+</h1>
              <p className='text-gray-400 mt-2'>Completed Projects</p>
            </div>

            <div className='text-center'>
              <h1 className='text-4xl font-bold text-sky-500'>90%</h1>
              <p className='text-gray-400 mt-2'>Client Satisfaction</p>
            </div>

            <div className='text-center'>
              <h1 className='text-4xl font-bold text-sky-500'>6+</h1>
              <p className='text-gray-400 mt-2'>Months of Experience</p>
            </div>
          </div>

          {/* Social Media Section
          <div className='mt-10'>
            <h3 className='text-xl font-bold mb-5'>Connect With Me</h3>
            <div className='flex flex-wrap gap-5'>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://behance.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Behance"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Dribbble"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: rgb(14, 165, 233);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(14, 165, 233, 0.4);
        }
      `}</style>
    </div>
  )
}

export default About