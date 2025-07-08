import Link from "next/link";
import ProjectCard from "../cards/ProjectCard";
import { ProjectCardTypes } from "@/libs/helpers/types";

const Projects = ({ projectsData }: { projectsData: [ProjectCardTypes] }) => {
  return (
    <>
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
        .stagger-9 { animation-delay: 0.9s; }
        .stagger-10 { animation-delay: 1.0s; }
      `}</style>

      <div className="w-full mt-[100px] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#00ce93]/10 to-transparent rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#00ce93]/5 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-[#00ce93]/5 to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Title Section */}
        <div className="relative z-10">
          <div className="w-full flex items-center justify-center mb-4 animate-fade-in-up">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#00ce93] to-transparent animate-pulse"></div>
          </div>
          
          <h2 className="w-full flex items-center justify-center text-center text-[#28282a] text-4xl md:text-5xl font-bold font-[Istok Web] capitalize relative group animate-fade-in-up stagger-1">
            Our Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#00ce93] to-[#00a075] rounded-full group-hover:w-32 transition-all duration-300"></div>
          </h2>
          
          <p className="w-full flex items-center justify-center text-center text-gray-600 text-lg font-normal font-[Inter] mt-4 max-w-2xl mx-auto px-4 animate-fade-in-up stagger-2">
            Explore our innovative solutions and creative projects that showcase our expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full flex px-[10px] md:px-0 justify-center items-center gap-[25px] flex-wrap mt-[80px] relative z-10">
          {projectsData.map((project, index) => {
            const staggerClass = `stagger-${Math.min(index + 3, 10)}`;
            return (
              <div
                key={index}
                className={`animate-fade-in-up ${staggerClass} group transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 transform-gpu`}
              >
                <div className="relative">
                  {/* Hover glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00ce93] to-[#00a075] rounded-lg blur opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                  
                  {/* Card wrapper */}
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <ProjectCard cardData={project} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        <div className="w-full mt-[80px] flex items-center justify-center animate-fade-in-up stagger-6">
          <Link
            href="/projects"
            className="
              relative group overflow-hidden
              w-[193px] h-[66px] bg-gradient-to-r from-[#00ce93] to-[#00a075] 
              rounded-[20px] flex justify-center items-center 
              text-center text-white text-xl font-normal font-[Inter] 
              transition-all duration-300 ease-out
              hover:shadow-2xl hover:shadow-[#00ce93]/25 hover:scale-105 
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
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
          </Link>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-16 w-2 h-2 bg-[#00ce93]/30 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-2 h-2 bg-[#00ce93]/30 rounded-full animate-float delay-500"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#00ce93]/30 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-[#00ce93]/30 rounded-full animate-float delay-1500"></div>
          <div className="absolute top-1/2 left-12 w-2 h-2 bg-[#00ce93]/30 rounded-full animate-float delay-2000"></div>
          <div className="absolute top-3/4 right-16 w-2 h-2 bg-[#00ce93]/30 rounded-full animate-float delay-2500"></div>
        </div>
      </div>
    </>
  );
};

export default Projects;