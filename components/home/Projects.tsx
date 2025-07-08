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
            }, index * 120);
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
    <div ref={sectionRef} className="w-full mt-[100px] relative">
      {/* Subtle geometric accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-4 w-1 h-20 bg-gradient-to-b from-[#00ce93] to-transparent opacity-30"></div>
        <div className="absolute top-40 right-8 w-1 h-16 bg-gradient-to-b from-[#00ce93] to-transparent opacity-20"></div>
        <div className="absolute bottom-32 left-1/3 w-8 h-1 bg-gradient-to-r from-[#00ce93] to-transparent opacity-25"></div>
      </div>

      {/* Title Section */}
      <div className="relative z-10">
        <div className={`
          transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}>
          {/* Decorative line */}
          <div className="w-full flex items-center justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00ce93] rounded-full animate-pulse"></div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#00ce93] to-transparent"></div>
              <div className="w-1 h-1 bg-[#00ce93] rounded-full opacity-60"></div>
            </div>
          </div>
          
          <h2 className="w-full flex items-center justify-center text-center text-[#28282a] text-4xl md:text-5xl font-bold font-[Istok Web] capitalize relative group">
            Our Projects
            {/* Animated underline */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00ce93] to-[#00a075] rounded-full group-hover:w-32 transition-all duration-500 ease-out"></div>
          </h2>
          
          <p className="w-full flex items-center justify-center text-center text-gray-600 text-lg font-normal font-[Inter] mt-6 max-w-2xl mx-auto px-4 leading-relaxed">
            Discover our portfolio of innovative solutions and creative projects that demonstrate our commitment to excellence
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full flex px-[10px] md:px-0 justify-center items-center gap-[30px] flex-wrap mt-[90px] relative z-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`
              transition-all duration-800 ease-out
              ${visibleCards.includes(index) 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
              }
              hover:scale-[1.03] hover:-translate-y-3 
              transform-gpu group
            `}
            style={{
              transitionDelay: `${index * 80}ms`,
            }}
          >
            <div className="relative">
              {/* Subtle hover glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00ce93]/5 to-[#00a075]/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Card wrapper with enhanced shadow */}
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#00ce93]/20">
                <ProjectCard cardData={project} />
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#00ce93] opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-tl-xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className={`
        w-full mt-[90px] flex items-center justify-center
        transition-all duration-1000 ease-out delay-700
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      `}>
        <Link
          href="/projects"
          className="
            relative group overflow-hidden
            w-[200px] h-[60px] bg-gradient-to-r from-[#00ce93] to-[#00a075] 
            rounded-full flex justify-center items-center 
            text-center text-white text-lg font-medium font-[Inter] 
            transition-all duration-400 ease-out
            hover:shadow-2xl hover:shadow-[#00ce93]/25 hover:scale-105 
            transform-gpu
            before:absolute before:inset-0 before:bg-gradient-to-r 
            before:from-[#00a075] before:to-[#00ce93] 
            before:opacity-0 before:transition-opacity before:duration-400
            hover:before:opacity-100
            border-2 border-transparent hover:border-white/20
          "
        >
          {/* Button content */}
          <span className="relative z-10 flex items-center gap-3">
            View All Projects
            <svg 
              className="w-5 h-5 transition-transform duration-400 group-hover:translate-x-2" 
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
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
        </Link>
      </div>

      {/* Floating minimal elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00ce93]/40 rounded-full"
            style={{
              left: `${25 + (i * 20)}%`,
              top: `${20 + (i * 15)}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;