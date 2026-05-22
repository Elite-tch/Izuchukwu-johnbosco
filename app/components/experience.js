"use client";

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Experience() {
return(
<div className='bg-white border-b    dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753] py-[5%]'>


<div className='w-[90%] mx-auto'>
<div className="text-center">
<h2 className='text-[#f25c34] text-2xl'>Professional Experience</h2>
<h1 className='font-semibold text-3xl md:text-4xl pt-3'>Crafting Digital Excellence</h1>
</div>
<motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  className='flex gap-4 md:gap-0  mt-12 md:w-[100%] mx-auto shadow-2xl border justify-between border-gray-400 dark:border-gray-700 p-8 md:flex-row flex-col'
>
<Image src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1736777414/logo_kkfdjw.png" alt="Picture of the author" width={300} height={100}  className='bg-white'/>
<ul className='md:w-[50%] text-sm list-disc'>
<li>Contributed to the development of MetroFund, a decentralized application built on blockchain technology, ensuring secure, transparent, and user-controlled experiences. </li>
<li>Focused on frontend development, creating an intuitive and responsive UI for seamless user interactions. </li>
<li>Integrated smart contracts for automating processes and enhancing efficiency. </li>
<li>Worked with a team to implement decentralized data management and ensure user privacy and security.</li>
<li>Played a key role in collaborating with cross-functional teams to deliver a high-quality, scalable dApp solution.</li>
</ul>
<p className='pt-4 md:pt-0'>November - 2024</p>
 
</motion.div>

<motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  className='flex gap-4 md:gap-0  mt-12 md:w-[100%] mx-auto shadow-2xl border justify-between border-gray-400 dark:border-gray-700 p-8 md:flex-row flex-col'
>
<Image src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1736777384/Screenshot__222_-removebg-preview_jmm4mg.png" alt="Picture of the author" width={300} height={100}  className='bg-white'/>
<ul className='md:w-[50%] text-sm list-disc'>
<li>I have worked with My Tech Team on various projects, including building Chalonic (e-commerce) and Nidfeast (event platform). </li>
<li>Chalonic: Developed an innovative e-commerce platform, focusing on dynamic product listings, inventory management, and creating a customized product recommendation system that enhanced the shopping experience. </li>
<li>Nidfeast: Built the event platform, incorporating features for event management, ticketing, and attendee engagement, aimed at simplifying the process for event organizers and participants. </li>
<li>Collaborated closely with team members to deliver high-quality, scalable, and user-friendly solutions.
</li>
</ul>
<p className='pt-4 md:pt-0'>Sept 2024 - Present</p>
 
</motion.div>
<div className='flex justify-center items-center mt-6 md:mt-12'>
<button className="bg-[#f25c34] hover:bg-[#1D1753] dark:hover:bg-[#f25c34]/80 dark:bg-[#f25c34] text-white md:px-4 px-3 py-2 rounded-md">
        <Link href='/'> Load more </Link>
    </button>
</div>





</div>
</div>


)
}