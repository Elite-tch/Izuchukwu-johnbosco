'use client'
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroPage() {
    return (
        <section id="home" className="pt-[30%] md:pt-[10%] pb-[6%]  overflow-x-hidden  dark:border-gray-700">
            <div className="w-[90%] mx-auto flex justify-between items-center md:flex-row flex-col md:gap-0 gap-14">
              
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="t w-[95%] flex flex-col gap-3"
            >
              <h3 className="flex items-center md:pl-28  gap-3"><span className="text-3xl">Hi </span>
              <Image src='/hand.gif'  alt='' width={80} height={80}/>
              </h3>
<h1 className="text-5xl md:text-7xl font-bold text-center">I'm Johnbosco <span className="text-[#f25c34]">Izuchukwu</span></h1>
<h2 className="text-2xl md:text-3xl font-bold text-center">A Frontend Developer & Blockchain Enthusiast</h2>
<p className="text-center">Passionate about building fast, responsive, and user-friendly websites using modern technologies.</p>
     <div className="flex gap-4 mt-4 justify-center">
         <button className="bg-[#f25c34] dark:bg-transparent dark:border dark:hover:text-[#f25c34] hover:bg-[#1D1753]/90 dark:hover:border-[#f25c34] uppercase text-white px-4 py-2 rounded-md">
            <Link href='#contact'>Hire Me</Link></button>
         <button className="bg-transparent dark:bg-[#f25c34] dark:hover:bg-[#f25c34]/80 uppercase text-[#1D1753] border border-[#1D1753] hover:bg-gray-100 dark:text-white px-4 py-2 rounded-md">
              <Link href='#project'>Explore My Work</Link></button>
     </div>
<div className="text-[#1D1753] dark:text-gray-200 mt-4 flex md:justify-center md:flex-row flex-col gap-4">
<div className=" flex w-fit flex-col border-r border-[#1D1753] dark:border-gray-200 pr-4">
<h3>EMAIL:</h3>
<h6>izuchukwujohnbosco95@gmail.com </h6>
</div> 
<div className="flex gap-4">
<div className="flex w-fit  flex-col  dark:border-gray-200 pr-4">
<h3>PHONE:</h3>
<h6>+2349135537940 </h6>

</div> 
</div>

</div> 
              </motion.div>  

            {/*  <div data-aos="zoom-in" className="">
              <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1737093938/concept119_773186-441_pmmlag.avif' alt='' width={650} height={350} className="h-[100%] rounded-xl"/>
              </div>  */}
         </div>  




         </section>
    );
    }