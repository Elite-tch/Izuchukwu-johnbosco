"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesCards() {
    const cards = [
        {
            title: "Full-Stack Development",
            desc: "Building complete, high-performance web products with modern interfaces, application logic, and dependable backend services.",
            bgColor: "bg-[#f8f9fa] dark:bg-black/40",
            textColor: "text-[#1D1753] dark:text-gray-200",
            iconColor: "bg-[#f25c34]",
        },
        {
            title: "Backend & APIs",
            desc: "Designing the application layer behind great products, including integrations, data flows, authentication, and real-time features.",
            bgColor: "bg-[#f25c34] dark:bg-[#f25c34]/90",
            textColor: "text-white",
            iconColor: "bg-white",
        },
        {
            title: "Product Engineering",
            desc: "Turning requirements into thoughtful, scalable product experiences, from early concept through launch and iteration.",
            bgColor: "bg-[#f8f9fa] dark:bg-black/40",
            textColor: "text-[#1D1753] dark:text-gray-200",
            iconColor: "bg-[#f25c34]",
        },
        {
            title: "Web3 Projects",
            desc: "Delivering selected blockchain integrations and protocol interfaces where decentralization adds real product value.",
            bgColor: "bg-[#f8f9fa] dark:bg-black/40",
            textColor: "text-[#1D1753] dark:text-gray-200",
            iconColor: "bg-[#f25c34]",
        }
    ];

    return (
        <section className="w-full overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-auto">
                {cards.map((card, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className={`flex flex-col justify-between p-10 border-r border-t border-gray-200 dark:border-white/10 dark:backdrop-blur-md sm:last:border-r-0 lg:border-t-0 transition-all duration-300 ${card.bgColor} ${card.textColor}`}
                    >
                        <h3 className="text-2xl lg:text-3xl font-semibold leading-tight">{card.title}</h3>
                        <div className="mt-6">
                            <div className={`w-12 h-8 mb-6 ${card.iconColor} shadow-sm`}></div>
                            <p className="text-sm opacity-90 leading-relaxed font-light">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
