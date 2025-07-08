"use client";

import Link from "next/link";
import ProjectCard from "../cards/ProjectCard";
import { ProjectCardTypes } from "@/libs/helpers/types";
import { useEffect, useRef, useState } from "react";

const Projects = ({ projectsData }: { projectsData: [ProjectCardTypes] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate cards one by one
          projectsData.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [projectsData]);

  return (
    <div ref={sectionRef} className="w-full mt-[100px] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#00ce93]/10 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#00ce93]/5 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Title Section */}
      <div className="relative z-10">
        <div className={`
          transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="w-full flex items-center justify-center mb-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#00ce93] to-transparent"></div>
          </div>
          
          <h2 className="w-full flex items-center justify-center text-center text-[#28282a] text-4xl md:text-5xl font-bold font-[Istok Web] capitalize relative">
            Our Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#00ce93] to-[#00a075] rounded-full"></div>
          </h2>
          
          <p className="w-full flex items-center justify-center text-center text-gray-600 text-lg font-normal font-[Inter] mt-4 max-w-2xl mx-auto px-4">
            Explore our innovative solutions and creative projects that showcase our expertise
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full flex px-[10px] md:px-0 justify-center items-center gap-[25px] flex-wrap mt-[80px] relative z-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`
              transition-all duration-700 ease-out
              ${visibleCards.includes(index) 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-8 opacity-0 scale-95'
              }
              hover:scale-105 hover:-translate-y-2 hover:shadow-xl
              transform-gpu
            `}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative group">
              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ce93] to-[#00a075] rounded-lg blur opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
              
              {/* Card wrapper */}
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <ProjectCard cardData={project} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className={`
        w-full mt-[80px] flex items-center justify-center
        transition-all duration-1000 ease-out delay-500
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}>
        <Link
          href="/projects"
          className="
            relative group overflow-hidden
            w-[193px] h-[66px] bg-gradient-to-r from-[#00ce93] to-[#00a075] 
            rounded-[20px] flex justify-center items-center 
            text-center text-white text-xl font-normal font-[Inter] 
            transition-all duration-300 ease-out
            hover:shadow-xl hover:scale-105 
            transform-gpu
            before:absolute before:inset-0 before:bg-gradient-to-r 
            before:from-[#00a075] before:to-[#00ce93] 
            before:opacity-0 before:transition-opacity before:duration-300
            hover:before:opacity-100
          "
        >
          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2">
            See More
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </span>
          
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
        </Link>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#00ce93]/30 rounded-full animate-pulse"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.5)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;