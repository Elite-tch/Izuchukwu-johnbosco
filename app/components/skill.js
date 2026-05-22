"use client";

import React from 'react';
import { FaReact, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12
    }
  }
};

const TechStack = () => {
  return (
    <div className='bg-white border-b dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753] text-center py-[5%]'>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className='w-[90%] mx-auto'
      >
        <h2 className='text-[#f25c34] text-2xl'>Technical Expertise</h2>
        <h1 className='font-semibold text-3xl md:text-4xl pt-3'>Tools & Technologies Powering My Creations</h1>

        <div className="flex gap-4 md:gap-10 pt-6 md:pt-12 justify-center items-center flex-wrap">
          <motion.div variants={iconVariants}>
            <FaReact color="#61DBFB" className='text-6xl hover:scale-110 transition-transform duration-200' />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiJavascript color="#F7DF1E" className='text-6xl hover:scale-110 transition-transform duration-200' />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiTypescript color="#3178C6" className='text-6xl hover:scale-110 transition-transform duration-200' />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiTailwindcss color="#38BDF8" className='text-6xl hover:scale-110 transition-transform duration-200' />
          </motion.div>
          <motion.div variants={iconVariants}>
            <SiNextdotjs className='text-6xl hover:scale-110 transition-transform duration-200 dark:fill-white' />
          </motion.div>
          <motion.div variants={iconVariants}>
            <FaGitAlt color="#F05032" className='text-6xl hover:scale-110 transition-transform duration-200' />
          </motion.div>
          <motion.div variants={iconVariants}>
            <FaBootstrap color="#7952B3" className='text-6xl hover:scale-110 transition-transform duration-200' />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;
