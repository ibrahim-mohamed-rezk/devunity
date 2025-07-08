"use client";

import { ProjectCardTypes } from "@/libs/helpers/types";
import { useState } from "react";

const ProjectCard = ({ cardData }: { cardData: ProjectCardTypes }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[400px] h-[480px] rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowDescription(!showDescription)}
    >
      {/* Main Card */}
      <div
        className="relative w-full h-full p-6 flex flex-col justify-between rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${cardData?.background_color}F0, ${cardData?.background_color}E0)`,
        }}
      >
        {/* Header Section */}
        <div className="flex flex-col space-y-4">
          {/* Project Icon with Animation */}
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img
                className="w-full h-full object-cover"
                src={cardData.logo}
                alt="Project Icon"
              />
            </div>
            {/* Floating glow effect */}
            <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>

          {/* Project Info */}
          <div className="space-y-2">
            <h3 className="text-[#2d3139] text-2xl font-bold font-['Inter'] leading-tight">
              {cardData.title}
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#00ce93] rounded-full animate-pulse"></div>
              <span className="text-[#2d3139]/70 text-sm font-medium font-['Inter'] uppercase tracking-wide">
                {cardData.category || "E-Commerce"}
              </span>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative flex-1 mt-6">
          <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-lg relative group/image">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={cardData.image}
              alt="project image"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating preview button */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-center mt-4">
          <div className="w-8 h-1 bg-[#00ce93]/30 rounded-full">
            <div className="w-4 h-1 bg-[#00ce93] rounded-full transition-all duration-300 group-hover:w-8"></div>
          </div>
        </div>
      </div>

      {/* Description Overlay */}
      <div
        className={`absolute inset-0 rounded-3xl flex flex-col justify-center items-center p-8 transition-all duration-500 ${
          showDescription
            ? "opacity-100 visible backdrop-blur-lg"
            : "opacity-0 invisible"
        }`}
        style={{
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.95) 100%)",
        }}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();
            setShowDescription(false);
          }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center space-y-6 max-w-sm">
          <h3 className="text-white text-3xl font-bold font-['Montserrat'] leading-tight">
            {cardData.title}
          </h3>
          
          <div
            className="text-white/90 text-lg font-medium font-['Montserrat'] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: cardData.description }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          {cardData?.app_store && (
            <a
              target="_blank"
              href={cardData?.app_store}
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group/btn"
            >
              <svg className="w-7 h-7 text-white transition-transform duration-300 group-hover/btn:scale-110" viewBox="0 0 28 35" fill="currentColor">
                <path d="M23.1148 18.5541C23.0761 14.3642 26.6335 12.3258 26.7961 12.2309C24.7815 9.36699 21.6588 8.97569 20.5615 8.94449C17.9388 8.67539 15.3948 10.4746 14.0588 10.4746C12.6961 10.4746 10.6388 8.97049 8.42146 9.01469C5.56813 9.05759 2.89879 10.6683 1.43479 13.1695C-1.58654 18.2694 0.666794 25.7639 3.56146 29.8862C5.00946 31.9051 6.70146 34.1593 8.91613 34.08C11.0828 33.9929 11.8921 32.7332 14.5068 32.7332C17.0975 32.7332 17.8575 34.08 20.1161 34.0293C22.4415 33.9929 23.9055 32.0013 25.3028 29.9642C26.9761 27.6502 27.6481 25.3713 27.6748 25.2543C27.6201 25.2361 23.1588 23.576 23.1148 18.5541Z" />
                <path d="M18.8481 6.23269C20.0135 4.81179 20.8108 2.87869 20.5895 0.916992C18.9028 0.989792 16.7935 2.05449 15.5788 3.44419C14.5041 4.66879 13.5441 6.67599 13.7921 8.56359C15.6868 8.70139 17.6321 7.63149 18.8481 6.23269Z" />
              </svg>
            </a>
          )}

          {cardData?.google_play && (
            <a
              target="_blank"
              href={cardData?.google_play}
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group/btn"
            >
              <svg className="w-7 h-7 text-white transition-transform duration-300 group-hover/btn:scale-110" viewBox="0 0 31 35" fill="currentColor">
                <path d="M0.617482 1.29751C0.226354 1.69726 0 2.31964 0 3.12564V31.8751C0 32.6811 0.226354 33.3035 0.617482 33.7033L0.714017 33.791L17.2146 17.6873V17.307L0.714017 1.20327L0.617482 1.29751Z" fill="url(#paint0_linear_584_5319)" />
                <path d="M22.7085 23.0586L17.2144 17.688V17.3077L22.7151 11.9371L22.8383 12.007L29.3526 15.6258C31.2118 16.6528 31.2118 18.3428 29.3526 19.3763L22.8383 22.9887L22.7085 23.0586Z" fill="url(#paint1_linear_584_5319)" />
                <defs>
                  <linearGradient id="paint0_linear_584_5319" x1="15.7496" y1="32.1745" x2="-6.06129" y2="9.83517" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00A0FF" />
                    <stop offset="1" stopColor="#00E3FF" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_584_5319" x1="31.7735" y1="17.496" x2="-0.444667" y2="17.496" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFE000" />
                    <stop offset="1" stopColor="#FF9C00" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          )}

          {cardData?.website && (
            <a
              target="_blank"
              href={cardData?.website}
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group/btn"
            >
              <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-float"
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px);
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;