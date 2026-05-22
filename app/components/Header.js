'use client'
import Link from 'next/link'
import DarkThemeToggle from './DarkThemeToggle';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div>
      <div className="w-full  ">
        <nav className="text-[#1D1753] dark:text-gray-200 z-30 shadow-2xl w-full dark:shadow-lg fixed py-6 bg-white  dark:bg-custom-gradient ">
          <div className='flex justify-between items-center w-[90%] mx-auto'>
            <h2 className="text-3xl font-bold">John<span className='text-[#f25c34]'>Bosco</span></h2>
            <div className="md:hidden flex items-center gap-3 justify-center">
            <DarkThemeToggle className='mt-0' />
    
              <button onClick={toggleSidebar} className="text-3xl">
                &#9776;
              </button>

            </div>
            <ul className="hidden md:flex justify-center items-center space-x-4">
              <Link className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 ' href="#home">Home</Link>
              <Link className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 ' href="#about">About</Link>
              <Link className=' hover:border-b-2 hover:border-[#f25c34]  px-4 py-1 ' href="#contact">Contact</Link>
              <Link className='hover:border-b-2 hover:border-[#f25c34]  px-4 py-1' href="#project">Projects</Link>
              <Link className='hover:border-b-2 hover:border-[#f25c34]  px-4 py-1' href="#testimonials">Testimonials</Link>
        
            </ul>
            <div className='hidden md:flex items-center'>
              <button className="bg-[#f25c34] hover:bg-[#1D1753] dark:hover:bg-[#f25c34]/80 dark:bg-[#f25c34] text-white md:px-4 px-3 py-2 rounded-md">
                <Link href="https://www.canva.com/design/DAGsxvI1dTU/pZeyzvbBhAXnT1pDLj9KyA/view?utm_content=DAGsxvI1dTU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h082deae10c"  target="_blank" rel="noopener noreferrer">Download CV</Link>
              </button>
              <DarkThemeToggle className='md:ml-6' />
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={toggleSidebar}
                className="fixed inset-0 bg-black z-40"
              />
              
              {/* Sidebar */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                className="fixed top-0 right-0 w-[70%] z-50 px-8 h-full bg-white dark:bg-[#111111] dark:bg-custom-gradient shadow-2xl"
              >
                <button onClick={toggleSidebar} className="text-3xl p-4">
                  &times;
                </button>
                <ul className="flex flex-col space-y-4 mt-5 text-[#1D1753] dark:text-gray-200">
                  <Link onClick={toggleSidebar} className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 w-fit' href="#home">Home</Link>
                  <Link onClick={toggleSidebar} className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 w-fit' href="#about">About</Link>
                  <Link onClick={toggleSidebar} className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 w-fit' href="#contact">Contact</Link>
                  <Link onClick={toggleSidebar} className='hover:border-b-2 hover:border-[#f25c34] px-4 py-1 w-fit' href="#project">Projects</Link>
                  <Link onClick={toggleSidebar} className='hover:border-b-2 hover:border-[#f25c34] w-fit px-4 py-1' href="#testimonials">Testimonials</Link>
              
                  <button className="hover:bg-[#1D1753] bg-[#f25c34] dark:bg[#f25c34] w-fit text-white px-4 py-2 rounded-md">
                    <Link href="https://www.canva.com/design/DAGsxvI1dTU/pZeyzvbBhAXnT1pDLj9KyA/view?utm_content=DAGsxvI1dTU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h082deae10c" target="_blank" rel="noopener noreferrer">Download CV</Link>
                  </button>
                  <DarkThemeToggle className='mt-4' />
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}