"use client";

import Link from "next/link";
import ProjectCard from "../cards/ProjectCard";
import { ProjectCardTypes } from "@/libs/helpers/types";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects = ({ projectsData }: { projectsData: [ProjectCardTypes] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-[1600px] mx-auto mt-[60px] sm:mt-[80px] lg:mt-[100px] relative px-4 sm:px-6 lg:px-8">
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
          <div className="w-full flex items-center justify-center mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00ce93] rounded-full animate-pulse"></div>
              <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-[#00ce93] to-transparent"></div>
              <div className="w-1 h-1 bg-[#00ce93] rounded-full opacity-60"></div>
            </div>
          </div>
          
          <h2 className="w-full flex items-center justify-center text-center text-[#28282a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[Istok Web] capitalize relative group">
            Our Projects
            {/* Animated underline */}
            <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00ce93] to-[#00a075] rounded-full group-hover:w-20 sm:group-hover:w-32 transition-all duration-500 ease-out"></div>
          </h2>
          
          <p className="w-full flex items-center justify-center text-center text-gray-600 text-sm sm:text-base lg:text-lg font-normal font-[Inter] mt-4 sm:mt-6 max-w-2xl mx-auto px-4 leading-relaxed">
            Discover our portfolio of innovative solutions and creative projects that demonstrate our commitment to excellence
          </p>
        </div>
      </div>

      {/* Projects Slider - Fixed Container */}
      <div className={`
        w-full mt-[60px] sm:mt-[80px] lg:mt-[90px] relative z-10
        transition-all duration-1000 ease-out delay-300
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      `}>
        {/* Swiper Container with proper overflow handling */}
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
              bulletClass: 'swiper-pagination-bullet-custom',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
                coverflowEffect: {
                  rotate: 5,
                  depth: 50,
                },
              },
              480: {
                slidesPerView: 1.1,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 8,
                  depth: 60,
                },
              },
              640: {
                slidesPerView: 1.3,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 10,
                  depth: 70,
                },
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 25,
                coverflowEffect: {
                  rotate: 12,
                  depth: 80,
                },
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 15,
                  depth: 90,
                },
              },
              1280: {
                slidesPerView: 2.2,
                spaceBetween: 35,
                coverflowEffect: {
                  rotate: 15,
                  depth: 100,
                },
              },
              1536: {
                slidesPerView: 2.5,
                spaceBetween: 40,
                coverflowEffect: {
                  rotate: 15,
                  depth: 100,
                },
              },
            }}
            className="projects-swiper"
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="group transform-gpu transition-all duration-300 hover:scale-[1.02]">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Positioned absolutely within container */}
          <div className="swiper-button-prev-custom absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00ce93] hover:text-white group border border-gray-200">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="swiper-button-next-custom absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00ce93] hover:text-white group border border-gray-200">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* See More Button */}
      <div className={`
        w-full mt-[60px] sm:mt-[80px] lg:mt-[90px] flex items-center justify-center
        transition-all duration-1000 ease-out delay-700
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      `}>
        <Link
          href="/projects"
          className="
            relative group overflow-hidden
            w-[160px] sm:w-[180px] lg:w-[200px] h-[50px] sm:h-[55px] lg:h-[60px] 
            bg-gradient-to-r from-[#00ce93] to-[#00a075] 
            rounded-full flex justify-center items-center 
            text-center text-white text-sm sm:text-base lg:text-lg font-medium font-[Inter] 
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
          <span className="relative z-10 flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline">View All Projects</span>
            <span className="sm:hidden">All Projects</span>
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-400 group-hover:translate-x-2" 
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

      {/* Custom Styles - Updated for proper containment */}
      <style jsx global>{`
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

        .projects-swiper {
          width: 100%;
          height: auto;
          padding: 20px 0 50px 0 !important;
          overflow: visible;
        }

        .projects-swiper .swiper-wrapper {
          padding: 0 20px;
        }

        .projects-swiper .swiper-pagination {
          bottom: 0 !important;
          position: relative !important;
          margin-top: 30px;
        }

        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: #e5e7eb;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
          border-radius: 50%;
        }

        .swiper-pagination-bullet-active-custom {
          background: #00ce93;
          transform: scale(1.2);
        }

        .projects-swiper .swiper-slide {
          height: auto;
          padding: 0 10px;
        }

        /* Ensure swiper doesn't overflow */
        .swiper {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
        }

        .swiper-wrapper {
          box-sizing: border-box;
        }

        /* Mobile specific styles */
        @media (max-width: 480px) {
          .projects-swiper {
            padding: 15px 0 40px 0 !important;
          }
          
          .projects-swiper .swiper-wrapper {
            padding: 0 15px;
          }

          .projects-swiper .swiper-slide {
            padding: 0 5px;
          }

          .swiper-pagination-bullet-custom {
            width: 8px;
            height: 8px;
            margin: 0 3px;
          }
        }

        /* Tablet styles */
        @media (max-width: 768px) {
          .projects-swiper {
            padding: 20px 0 45px 0 !important;
          }
          
          .projects-swiper .swiper-wrapper {
            padding: 0 20px;
          }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .projects-swiper {
            padding: 20px 0 60px 0 !important;
          }
          
          .projects-swiper .swiper-wrapper {
            padding: 0 30px;
          }

          .projects-swiper .swiper-slide {
            padding: 0 15px;
          }

          .swiper-pagination-bullet-custom {
            width: 12px;
            height: 12px;
            margin: 0 6px;
          }
        }

        /* Large desktop styles */
        @media (min-width: 1536px) {
          .projects-swiper {
            padding: 25px 0 70px 0 !important;
          }
          
          .projects-swiper .swiper-wrapper {
            padding: 0 40px;
          }
        }

        /* Hide default swiper navigation */
        .swiper .swiper-button-next,
        .swiper .swiper-button-prev {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Projects;