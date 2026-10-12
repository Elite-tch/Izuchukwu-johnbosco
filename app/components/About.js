"use client";

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id='about' className='bg-white border-b dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753] pt-[5%]'>

      <div className='flex gap-10 md:gap-16 w-[90%] md:w-[80%] mx-auto py-10 justify-center md:flex-row flex-col items-center md:items-stretch'>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-4 w-full md:w-[45%] h-full"
        >
            <div className="bg-[#f8f9fa] dark:bg-[#111111] border border-gray-100 dark:border-gray-800 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                <h3 className="text-4xl md:text-5xl font-bold text-[#f25c34] mb-2">4+</h3>
                <p className="text-sm font-medium opacity-80">Years Experience</p>
            </div>
            <div className="bg-[#f8f9fa] dark:bg-[#111111] border border-gray-100 dark:border-gray-800 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                <h3 className="text-4xl md:text-5xl font-bold text-[#f25c34] mb-2">25+</h3>
                <p className="text-sm font-medium opacity-80">Shipped Products</p>
            </div>
            <div className="bg-[#f8f9fa] dark:bg-[#111111] border border-gray-100 dark:border-gray-800 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                <h3 className="text-4xl md:text-5xl font-bold text-[#f25c34] mb-2">60%</h3>
                <p className="text-sm font-medium opacity-80">Performance Boost</p>
            </div>
            <div className="bg-[#f8f9fa] dark:bg-[#111111] border border-gray-100 dark:border-gray-800 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm">
                <h3 className="text-4xl md:text-5xl font-bold text-[#f25c34] mb-2">100%</h3>
                <p className="text-sm font-medium opacity-80">Client Retention</p>
            </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='md:w-[47%] flex flex-col gap-2 justify-center'
        >
          <h2 className='text-[#f25c34] text-2xl font-bold mb-2'>Who I Am</h2>
          <div className='text-sm flex flex-col gap-4 opacity-90 leading-relaxed'>
            <p>I am a full-stack developer with over three years of experience building complete web products, from intuitive interfaces to reliable backend services, data workflows, and developer tools. I specialize in the Next.js ecosystem and turn product ideas into fast, maintainable applications.</p>
            <p>Having launched more than a dozen products across healthcare, commerce, SaaS, and Web3, I bring product thinking and technical execution together. I care deeply about performance, usability, and creating systems that work seamlessly from the first click to the underlying data.</p>
          </div>
          <div className='flex gap-5 mt-6'>
            <a href="https://x.com/IzuchukwuJ99034?t=C0oDZva2STQieP_PRp08Gg&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={28} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34] transition-colors' />
            </a>
            <a href="https://github.com/Elite-tch" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34] transition-colors' />
            </a>
            <a href="https://www.linkedin.com/in/izuchukwu-johnbosco-364657323" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34] transition-colors' />
            </a>
          </div>
        </motion.div>

      </div>

    </section>
  )
}
