"use client";
import React, { useState } from "react";
import {
  Smartphone,
  Globe,
  Palette,
  TestTube,
  Rocket,
  Settings,
  Pen,
} from "lucide-react";

interface cycleDataType {
  id?: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DevelopCycle = () => {
  const cycleData: cycleDataType[] = [
    {
      id: 0,
      title: "iOS Development",
      icon: <Smartphone className="w-6 h-6" />,
      description:
        "At Devunity, we specialize in crafting exceptional mobile applications for iOS that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable solutions tailored to your specific needs.",
    },
    {
      id: 1,
      title: "Android Development",
      icon: <Smartphone className="w-6 h-6" />,
      description:
        "At Devunity, we specialize in crafting exceptional mobile applications for Android that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable solutions tailored to your specific needs.",
    },
    {
      id: 2,
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      description:
        "At Devunity, we specialize in crafting exceptional web solutions that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable web platforms tailored to your specific needs.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      description:
        "At Devunity, we specialize in crafting exceptional user interfaces and experiences that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable designs tailored to your specific needs.",
    },
    {
      id: 4,
      title: "Quality Assurance Testing",
      icon: <TestTube className="w-6 h-6" />,
      description:
        "At Devunity, we specialize in ensuring the quality of our products through rigorous testing processes that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and reliable solutions tailored to your specific needs.",
    },
    {
      id: 5,
      title: "Product Launch",
      icon: <Rocket className="w-6 h-6" />,
      description:
        "At Devunity, we specialize in launching products that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable solutions tailored to your specific needs.",
    },
    {
      id: 6,
      title: "IT Consulting",
      icon: <Settings className="w-6 h-6" />,
      description:
        "At Devunity, we specialize in providing IT consulting services that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable strategies tailored to your specific needs.",
    },
    // Content writing
    {
      id: 7,
      title: "Content Writing",
      icon: <Pen className="w-6 h-6" />,
      description:
        "At Devunity, we specialize in providing content writing services that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable strategies tailored to your specific needs.",
    },
  ];

  const [selectedCard, setSelectedCard] = useState<cycleDataType | null>(null);

  const openModal = (cardData: cycleDataType) => {
    setSelectedCard(cardData);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl text-gray-900 mb-2 animate-in fade-in slide-in-from-top-4 duration-800">
          Full Development Cycle
        </h2>
        <span className="font-medium text-gray-700 animate-in fade-in slide-in-from-top-4 duration-800 delay-200">
          We use proven technologies
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cycleData.map((data, index) => (
          <div
            key={data.id}
            onClick={() => openModal(data)}
            className="group relative cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{
              animationDelay: `${400 + index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            {/* Card */}
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl p-6 my-[1vw] h-25 flex flex-col justify-center items-center text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl hover:shadow-emerald-500/25">
              {/* Icon Circle */}
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white animate-in zoom-in duration-500 group-hover:rotate-12 transition-transform"
                style={{
                  animationDelay: `${600 + index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                {data.icon}
              </div>

              {/* Title */}
              <h3
                className="text-gray-900 font-bold text-xl mt-4 group-hover:text-white transition-colors duration-300 animate-in fade-in slide-in-from-bottom-4 duration-600"
                style={{
                  animationDelay: `${700 + index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                {data.title}
              </h3>

              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-pulse"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.2635 6.26361C8.91203 6.61508 8.91203 7.18493 9.26351 7.5364L13.7271 12L9.2635 16.4636C8.91203 16.8151 8.91203 17.3849 9.26351 17.7364C9.61498 18.0879 10.1848 18.0879 10.5363 17.7364L15.6363 12.6364C15.9878 12.2849 15.9878 11.715 15.6363 11.3636L10.5363 6.2636C10.1848 5.91213 9.61498 5.91213 9.2635 6.26361Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[100vh] overflow-y-auto relative animate-in fade-in zoom-in slide-in-from-bottom-8 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 animate-in fade-in zoom-in duration-300 delay-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div
              className="p-8 "
              style={{ backgroundImage: "url('/home/heroBg.png')" }}
            >
              {/* Header with icon */}
              <div className="flex items-center gap-4 mb-6 animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center text-white animate-in zoom-in duration-600 delay-200">
                  {React.isValidElement(selectedCard.icon) &&
                    React.cloneElement(
                      selectedCard.icon as React.ReactElement<{
                        className?: string;
                      }>,
                      {
                        className: "w-8 h-8",
                      }
                    )}
                </div>
                <h2 className="text-[clamp(1.5rem,5vw,2rem)]  text-white animate-in fade-in slide-in-from-right-4 duration-500 delay-300">
                  {selectedCard.title}
                </h2>
              </div>

              {/* Description */}
              <div className="prose prose-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                <p className="text-white  leading-relaxed text-[clamp(1rem,5vw,1.2rem)]">
                  {selectedCard.description}
                </p>
              </div>

              {/* Action Button */}
              {/* <div className="mt-8 flex justify-end animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevelopCycle;
