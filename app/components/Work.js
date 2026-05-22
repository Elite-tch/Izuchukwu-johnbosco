"use client"
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const aosVariants = {
  'zoom-in': {
    initial: { opacity: 0, scale: 0.92 },
    whileInView: { opacity: 1, scale: 1 },
  },
  'zoom-out': {
    initial: { opacity: 0, scale: 1.08 },
    whileInView: { opacity: 1, scale: 1 },
  },
  'fade-up': {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  },
  'fade-right': {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
  },
};

// Project data
const allProjects = [
  // Web3 Projects
  {
    title: 'MetroFund',
    category: 'web3',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1736887965/WhatsApp_Video_2025-01-14_at_20.34.44_231ea1dc_iklxkd.mp4',
    live: 'https://metrofund.vercel.app',
    description: 'MetroFund is a decentralized crowdfunding platform built on blockchain technology for secure and transparent financial management. As part of the team, I contributed to developing a responsive and dynamic interface, ensuring seamless interaction with the blockchain backend. My role focused on optimizing the user experience, making the platform accessible and easy to use.',
    tech: ['Next.Js', 'Css', 'Tailwind', 'Web3.js'],
    aos: 'zoom-in',
  },
  {
    title: 'FlareStudio',
    category: 'web3',
    video: null, // No video available
    live: 'https://www.flarestudio.xyz/',
    description: 'Developer toolkit and interactive playground for the Flare Network. Built as a multi-feature developer platform for exploring, learning, and building on the Flare blockchain. Includes dashboards, analytics, interactive RPC testing, and the ProofRails SDK for ISO 20022 compliant receipts.',
    tech: ['Next.Js', 'JavaScript', 'SDK', 'Flare Network'],
    aos: 'fade-up',
  },
  
  // Frontend / Web2 Projects
  {
    title: 'Georenz',
    category: 'frontend',
    video: '/georenz.mp4',
    live: 'https://georenz.com/',
    description: 'Georenz is a solar installation company that provides solar energy solutions to individuals and businesses. The website serves as a lead-generation platform showcasing the company’s services, expertise, and customer commitment.',
    tech: ['Next.Js', 'Framer Motion', 'Tailwind'],
    aos: 'fade-right',
  },
  {
    title: 'Kamil & Iwona',
    category: 'frontend',
    video: '/kamil.mp4',
    live: 'https://kamil-iwona-foods.vercel.app/',
    description: 'Kamil-Iwona Foods is an online raw food delivery platform offering a wide range of traditional ingredients to households and businesses. The platform was developed to digitize and streamline the food ordering process.',
    tech: ['Next.Js', 'Css', 'Tailwind', 'Firebase'],
    aos: 'zoom-in',
  },
  {
    title: 'Nsukka Legends FA',
    category: 'frontend',
    video: '/nsukka.mp4',
    live: 'https://www.nsukkalegendsfa.com/',
    description: 'Nsukka Legends Football Academy is a youth-focused football academy promoting athletic development and sports education. The site was created to share match updates, display team profiles, and communicate the academy vision.',
    tech: ['Next.Js', 'Css', 'Tailwind', 'Firebase'],
    aos: 'fade-right',
  },
  {
    title: 'MediLink',
    category: 'frontend',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1736888840/WhatsApp_Video_2025-01-14_at_20.31.07_6ca8e5ca_wuhyne.mp4',
    live: 'https://medi-link-tau.vercel.app/',
    description: 'Medi Link is an innovative platform designed to connect healthcare professionals and patients seamlessly. As a frontend developer, I worked on creating a clean, intuitive user interface that allows easy navigation and interaction.',
    tech: ['React.Js', 'Css', 'Tailwind'],
    aos: 'fade-up',
  },
  {
    title: 'WorshipTogether',
    category: 'frontend',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1736887947/WhatsApp_Video_2025-01-14_at_20.31.10_53b29416_qu1wbk.mp4',
    live: 'https://worshipetogether.vercel.app',
    description: 'Worship Together project is a platform designed for easy collaboration and sharing of worship resources. I created a clean, user-friendly interface to help users explore and organize worship materials seamlessly.',
    tech: ['Next.Js', 'Css', 'Tailwind'],
    aos: 'zoom-out',
  },
  {
    title: 'ShipMarket',
    category: 'web3',
    video: null,
    live: 'https://ship-market.vercel.app/',
    description: 'A high-fidelity, decentralized digital marketplace built on the Solana blockchain. Powered by the $SHIP token, it enables creators to list and sell premium Web3 resources while offering dynamic on-chain discounts based on user token holdings.',
    tech: ['Next.Js', 'Solana', 'Anchor', 'Tailwind CSS'],
    aos: 'zoom-in',
  },
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Filter projects by active tab
  const filteredProjects = allProjects.filter(p => p.category === activeTab);
  
  // Split into main and dropdown (show first 4, then the rest)
  const mainProjects = filteredProjects.slice(0, 4);
  const dropdownProjects = filteredProjects.slice(4);

  // Switch tab handler
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setIsOpen(false); // Reset dropdown when switching tabs
  };

  const renderProject = (project, idx) => {
    const animation = aosVariants[project.aos] || {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 }
    };
    return (
      <motion.div
        key={project.title + idx}
        initial={animation.initial}
        whileInView={animation.whileInView}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className='flex flex-col gap-5 md:w-[100%] bg-gray-100 dark:bg-gray-900 px-5 pb-6 pt-5 rounded-md shadow-sm hover:shadow-md transition-shadow'
      >
        {project.video ? (
          <div className="rounded-md overflow-hidden bg-black flex items-center justify-center min-h-[200px] md:h-80">
            <video className="md:h-80 w-full object-cover" autoPlay muted loop playsInline>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="rounded-md overflow-hidden bg-gradient-to-tr from-[#1D1753] to-[#f25c34]/80 flex items-center justify-center min-h-[200px] md:h-80 text-white font-bold text-2xl text-center p-6">
            {project.title} Preview
          </div>
        )}
        <div className='flex flex-col gap-2 pr-5'>
          <div className='flex justify-between items-center'>
            <h3 className='text-3xl font-semibold'>{project.title}</h3>
            <div className='flex gap-6 items-center'>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-[#f25c34] transition-colors">
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </div>
          <p className='text-sm opacity-90 leading-relaxed mt-2'>{project.description}</p>
          <div className='flex gap-4 items-center pt-3 flex-wrap'>
            {project.tech.map((tech, i) => (
              <span
                key={tech + i}
                className='bg-gray-200 flex items-center text-center dark:bg-gray-800 px-4 py-1 rounded-full text-xs font-medium'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id='project' className='bg-white border-b dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753] py-[5%]'>
      <div className='w-[90%] mx-auto'>
        <h2 className="text-[#f25c34] text-2xl text-center font-bold">Our Recent Projects</h2>
        <h1 className="font-semibold text-3xl md:text-4xl pt-3 text-center mb-10">Innovative solutions we’ve delivered</h1>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-900 rounded-full p-1 shadow-sm border border-gray-200 dark:border-gray-800">
            <button
              onClick={() => handleTabSwitch('frontend')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'frontend' 
                  ? 'bg-[#f25c34] text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-[#1D1753] dark:hover:text-white'
              }`}
            >
              Frontend Engineering
            </button>
            <button
              onClick={() => handleTabSwitch('web3')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'web3' 
                  ? 'bg-[#f25c34] text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-[#1D1753] dark:hover:text-white'
              }`}
            >
              Web3 & Blockchain
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 transition-opacity duration-500'>
          {mainProjects.map((project, idx) => renderProject(project, idx))}
        </div>
        
        {/* Dropdown projects */}
        {isOpen && dropdownProjects.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 transition-opacity duration-500'>
            {dropdownProjects.map((project, idx) => renderProject(project, idx))}
          </div>
        )}
        
        {/* Toggle button */}
        {dropdownProjects.length > 0 && (
          <div className='flex justify-center pt-12'>
            <button
              onClick={toggleDropdown}
              className="bg-transparent border-2 border-[#f25c34] text-[#f25c34] hover:bg-[#f25c34] hover:text-white transition-colors md:px-6 px-4 py-2 rounded-full font-semibold"
            >
              {isOpen ? 'Show Less' : 'Explore More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
