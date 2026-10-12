"use client"
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
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

const allProjects = [
  {
    title: 'Inkwell Studio',
    category: 'fullstack',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1791786403/galway_psolzj.mp4',
    live: 'https://tattoos-studio.vercel.app/',
    description: 'A refined, conversion-focused website for a Dublin tattoo and piercing studio, presenting custom artwork, studio services, booking pathways, gallery content, and location details in an immersive visual experience.',
    role: 'Built the responsive marketing experience, service discovery and conversion-focused booking journey.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    aos: 'zoom-in',
    preview: 'inkwell',
  },
  {
    title: 'MEDNORIS',
    category: 'fullstack',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1791789777/Screen_Recording_2026-09-23_172044_wppsek.mp4',
    live: 'https://mednoris-web.vercel.app/',
    description: 'A privacy-first healthcare platform that gives patients ownership of their medical records while enabling secure consultations, verified doctors, and streamlined hospital records management.',
    role: 'Built the product experience for secure record access, doctor discovery and healthcare workflows.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Healthcare UX'],
    aos: 'fade-up',
    preview: 'mednoris',
  },
  {
    title: 'MEDNORIS Waitlist',
    category: 'fullstack',
    image: 'https://res.cloudinary.com/dibwnfwk9/image/upload/v1791790061/Screenshot_2026-10-12_074405_ogcun1.png',
    live: 'https://mednoris-waitlist.vercel.app/',
    description: 'A launch-ready waitlist experience for MEDNORIS, introducing patient-controlled records, verified doctor access, and secure permission-based care through a clear, confidence-building product story.',
    role: 'Designed and built the responsive launch experience and waitlist conversion flow.',
    tech: ['Next.js', 'Tailwind CSS', 'Product Design', 'Responsive Design'],
    aos: 'fade-right',
    preview: 'waitlist',
  },
  {
    title: 'Savique',
    category: 'web3',
    video: "https://res.cloudinary.com/dibwnfwk9/video/upload/v1782480948/202605251138_c1oggv.mp4",
    live: ' https://devnetnet.savique.xyz',
    description: 'Savique is a goal-based USDC savings protocol on Arbitrum with Aave yield integration, time-locked vaults, a 10% early-withdrawal penalty, and a Proof of Solvency feature for sharing verified on-chain savings history',
    tech: ['Next.js', 'TypeScript', 'Solidity', 'Arbitrum', 'Aave', 'Tailwind'],
    aos: 'zoom-in',
  },
  {
    title: 'ShipMarket',
    category: 'web3',
    video:"https://res.cloudinary.com/dibwnfwk9/video/upload/v1782482336/shipp_cdq8mo.mp4",
    live: 'https://ship-market.vercel.app/',
    description: 'ShipMarket is a decentralized digital marketplace on Solana for buying and selling digital products, featuring a $SHIP SPL token and a tiered loyalty system with discounts up to 40% for top-tier holders.',
    tech: ['Next.Js', 'Solana', 'Anchor', 'Tailwind CSS'],
    aos: 'zoom-in',
  },
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
    image: 'https://res.cloudinary.com/dibwnfwk9/image/upload/v1791790432/lin_z7kw6s.png',
    live: 'https://www.flarestudio.xyz/',
    description: 'Developer toolkit and interactive playground for the Flare Network. Built as a multi-feature developer platform for exploring, learning, and building on the Flare blockchain. Includes dashboards, analytics, interactive RPC testing, and the ProofRails SDK for ISO 20022 compliant receipts.',
    tech: ['Next.Js', 'JavaScript', 'SDK', 'Flare Network'],
    aos: 'fade-up',
  },
  {
    title: 'IdeaRadar',
    category: 'fullstack',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1782480832/202606010950_chvkdq.mp4',
    live: ' https://idearadar-pi.vercel.app',
    description: 'IdeaRadar is an AI-powered startup idea validator using Qdrant vector search to surface similar companies and differentiation angles. Supports text input, document upload, and live URL analysis.',
    tech: ['Next.js', 'TypeScript', 'Qdrant', 'Gemini AI'],
    aos: 'fade-right',
  },
  {
    title: 'Amadeus Agent Marketplace',
    category: 'fullstack',
    video: 'https://res.cloudinary.com/dibwnfwk9/video/upload/v1782482324/amadus_pgeuir.mp4',
    live: 'https://amadeus-agent-marketplace.vercel.app',
    description: 'Amadeus is a decentralized marketplace for AI agents, enabling users to browse, deploy, and interact with blockchain-powered agents across categories including DeFi trading, automation, and gaming.',
    tech: ['Next.Js', 'TypeScript', 'Tailwind'],
    aos: 'fade-right',
  },
  {
    title: 'Georenz',
    category: 'fullstack',
    video: '/georenz.mp4',
    live: 'https://georenz.com/',
    description: "Georenz is a solar installation company that provides solar energy solutions to individuals and businesses. The website serves as a lead-generation platform showcasing the company's services, expertise, and customer commitment.",
    tech: ['Next.Js', 'Framer Motion', 'Tailwind'],
    aos: 'fade-right',
  },
  {
    title: 'Kamil & Iwona',
    category: 'fullstack',
    video: '/kamil.mp4',
    live: 'https://kamil-iwona-foods.vercel.app/',
    description: 'Kamil-Iwona Foods is an online raw food delivery platform offering a wide range of traditional ingredients to households and businesses. The platform was developed to digitize and streamline the food ordering process.',
    tech: ['Next.Js', 'Css', 'Tailwind', 'Firebase'],
    aos: 'zoom-in',
  },
  {
    title: 'Nsukka Legends FA',
    category: 'fullstack',
    video: '/nsukka.mp4',
    live: 'https://www.nsukkalegendsfa.com/',
    description: 'Nsukka Legends Football Academy is a youth-focused football academy promoting athletic development and sports education. The site was created to share match updates, display team profiles, and communicate the academy vision.',
    tech: ['Next.Js', 'Css', 'Tailwind', 'Firebase'],
    aos: 'fade-right',
  },
  
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('fullstack');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const filteredProjects = allProjects.filter(p => p.category === activeTab);
  const mainProjects = filteredProjects.slice(0, 4);
  const dropdownProjects = filteredProjects.slice(4);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setIsOpen(false);
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
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
              <source src={project.video} type="video/mp4"  />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : project.image ? (
          <div className="rounded-md overflow-hidden bg-gray-200 min-h-[200px] md:h-80">
            <img src={project.image} alt={`${project.title} project preview`} className="h-full w-full object-cover object-top" />
          </div>
        ) : (
          <div className={`relative overflow-hidden min-h-[200px] md:h-80 p-6 md:p-8 flex flex-col justify-between text-white ${
            project.preview === 'inkwell'
              ? 'bg-[#18181b]'
              : 'bg-[#34254e]'
          }`}>
            <div className={`absolute -right-12 -top-16 h-56 w-56 rounded-full blur-2xl opacity-70 ${
              project.preview === 'inkwell' ? 'bg-[#8c1d27]' : 'bg-[#8f67c9]'
            }`} />
            <div className="relative flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
              <span>{project.preview === 'inkwell' ? 'Custom tattoo & piercing' : 'Privacy-first healthcare'}</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Live project</span>
            </div>
            <div className="relative">
              <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.35em] ${
                project.preview === 'inkwell' ? 'text-[#d4af37]' : 'text-[#d6c6f7]'
              }`}>
                {project.preview === 'inkwell' ? 'Dublin' : project.preview === 'waitlist' ? 'Early access' : 'Patient-owned care'}
              </p>
              <h4 className="max-w-sm text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h4>
            </div>
            <div className="relative h-1 w-24 rounded-full bg-white/60" />
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
          {project.role && (
            <p className='text-sm leading-relaxed mt-2 border-l-2 border-[#f25c34] pl-3 font-medium'>
              <span className='text-[#f25c34]'>My role:</span> {project.role}
            </p>
          )}
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
        <h2 className="text-[#f25c34] text-2xl md:text-3xl mb-6 text-center font-bold">My Recent Projects</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-900 rounded-full p-1 shadow-sm border border-gray-200 dark:border-gray-800">
            <button
              onClick={() => handleTabSwitch('fullstack')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'fullstack'
                  ? 'bg-[#f25c34] text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-[#1D1753] dark:hover:text-white'
              }`}
            >
              Full-Stack Development
            </button>
            <button
              onClick={() => handleTabSwitch('web3')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'web3' 
                  ? 'bg-[#f25c34] text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-[#1D1753] dark:hover:text-white'
              }`}
            >
              Web3 Projects
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 transition-opacity duration-500'>
          {mainProjects.map((project, idx) => renderProject(project, idx))}
        </div>
        
        {isOpen && dropdownProjects.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 transition-opacity duration-500'>
            {dropdownProjects.map((project, idx) => renderProject(project, idx))}
          </div>
        )}
        
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

        <div className="mt-14 rounded-2xl bg-[#1D1753] px-6 py-10 text-center text-white md:px-12 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f25c34]">Let&apos;s build something useful</p>
          <h3 className="mx-auto mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Have a product idea that needs both frontend polish and reliable backend foundations?</h3>
          <a href="#contact" className="mt-7 inline-flex rounded-full bg-[#f25c34] px-6 py-3 font-semibold transition-colors hover:bg-white hover:text-[#1D1753]">
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
