"use client";

import { useState } from "react";

const ProjectCard = ({ cardData }: any) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      className={`flex flex-col items-start p-[20px] cursor-pointer justify-start w-full max-w-[450px] h-[465px] relative rounded-[20px] shadow-lg overflow-hidden`}
      style={{ backgroundColor: cardData?.background_color }}
      onClick={() => setShowDescription(!showDescription)}
      //   onMouseOver={() => setShowDescription(true)}
      //   onMouseLeave={() => setShowDescription(false)}
    >
      {/* Project Icon */}
      <img
        className="w-[60px] rounded-lg h-[60px]"
        src={cardData.logo}
        alt="Project Icon"
      />

      {/* Project Title */}
      <div className=" text-[#2d3139] text-2xl font-semibold font-['Inter'] mt-[13px] ">
        Furniture Hub
      </div>

      {/* Project Category */}
      <div className=" text-[#2d3139] text-md font-normal font-['Inter']">
        E-Commerce
      </div>

      {/* Content Box */}
      <div className=" w-full h-[250px] rounded-[11px] shadow-md flex justify-center items-center mt-[30px] overflow-hidden ">
        <img
          className="w-full h-full rounded-[11px] "
          src={cardData.image}
          alt="project image"
        />
      </div>

      {/* Description */}
      {showDescription && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-col gap-[60px] justify-center items-center "
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.595) 0.01%, #000000 100%)",
          }}
        >
          <h3 className="text-center text-white text-[46px] font-bold font-['Montserrat'] leading-[31px]">
            {cardData.title}
          </h3>
          <div
            className="px-[10px] text-center text-white text-xl font-medium font-['Montserrat'] leading-[31px]"
            dangerouslySetInnerHTML={{ __html: cardData.description }}
          />
          <div className="h-[74px] justify-start items-center gap-5 inline-flex justify-self-end">
            <a target="_blank" href={cardData?.app_store} className="w-[74px] h-[74px] pl-[21px] pr-5 pt-[17px] pb-[18px] bg-white rounded-[21px] shadow-[0px_0px_18px_0px_rgba(255,255,255,0.20)] border border-[#a6a6a6] justify-start items-center gap-2.5 flex">
              <svg
                width="28"
                height="35"
                viewBox="0 0 28 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.1148 18.5541C23.0761 14.3642 26.6335 12.3258 26.7961 12.2309C24.7815 9.36699 21.6588 8.97569 20.5615 8.94449C17.9388 8.67539 15.3948 10.4746 14.0588 10.4746C12.6961 10.4746 10.6388 8.97049 8.42146 9.01469C5.56813 9.05759 2.89879 10.6683 1.43479 13.1695C-1.58654 18.2694 0.666794 25.7639 3.56146 29.8862C5.00946 31.9051 6.70146 34.1593 8.91613 34.08C11.0828 33.9929 11.8921 32.7332 14.5068 32.7332C17.0975 32.7332 17.8575 34.08 20.1161 34.0293C22.4415 33.9929 23.9055 32.0013 25.3028 29.9642C26.9761 27.6502 27.6481 25.3713 27.6748 25.2543C27.6201 25.2361 23.1588 23.576 23.1148 18.5541Z"
                  fill="black"
                />
                <path
                  d="M18.8481 6.23269C20.0135 4.81179 20.8108 2.87869 20.5895 0.916992C18.9028 0.989792 16.7935 2.05449 15.5788 3.44419C14.5041 4.66879 13.5441 6.67599 13.7921 8.56359C15.6868 8.70139 17.6321 7.63149 18.8481 6.23269Z"
                  fill="black"
                />
              </svg>
            </a>
            <a target="_blank" href={cardData?.google_play} className="w-[74px] h-[74px] pl-[21px] pr-5 pt-[17px] pb-[18px] bg-white rounded-[21px] shadow-[0px_0px_18px_0px_rgba(255,255,255,0.20)] border border-[#a6a6a6] justify-start items-center gap-2.5 flex">
              <svg
                width="31"
                height="35"
                viewBox="0 0 31 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.617482 1.29751C0.226354 1.69726 0 2.31964 0 3.12564V31.8751C0 32.6811 0.226354 33.3035 0.617482 33.7033L0.714017 33.791L17.2146 17.6873V17.307L0.714017 1.20327L0.617482 1.29751Z"
                  fill="url(#paint0_linear_584_5319)"
                />
                <path
                  d="M22.7085 23.0586L17.2144 17.688V17.3077L22.7151 11.9371L22.8383 12.007L29.3526 15.6258C31.2118 16.6528 31.2118 18.3428 29.3526 19.3763L22.8383 22.9887L22.7085 23.0586Z"
                  fill="url(#paint1_linear_584_5319)"
                />
                <path
                  d="M22.8383 22.9883L17.2143 17.4974L0.617188 33.7035C1.23467 34.3373 2.24162 34.4137 3.38671 33.7799L22.8383 22.9883Z"
                  fill="url(#paint2_linear_584_5319)"
                />
                <path
                  d="M22.8383 12.0072L3.38671 1.21555C2.24162 0.588302 1.23467 0.664675 0.617188 1.29842L17.2143 17.498L22.8383 12.0072Z"
                  fill="url(#paint3_linear_584_5319)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_584_5319"
                    x1="15.7496"
                    y1="32.1745"
                    x2="-6.06129"
                    y2="9.83517"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00A0FF" />
                    <stop offset="0.0066" stopColor="#00A1FF" />
                    <stop offset="0.2601" stopColor="#00BEFF" />
                    <stop offset="0.5122" stopColor="#00D2FF" />
                    <stop offset="0.7604" stopColor="#00DFFF" />
                    <stop offset="1" stopColor="#00E3FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_584_5319"
                    x1="31.7735"
                    y1="17.496"
                    x2="-0.444667"
                    y2="17.496"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFE000" />
                    <stop offset="0.4087" stopColor="#FFBD00" />
                    <stop offset="0.7754" stopColor="#FFA500" />
                    <stop offset="1" stopColor="#FF9C00" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_584_5319"
                    x1="19.7801"
                    y1="14.5125"
                    x2="-9.79717"
                    y2="-15.7815"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF3A44" />
                    <stop offset="1" stopColor="#C31162" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_584_5319"
                    x1="-3.56066"
                    y1="43.269"
                    x2="9.64693"
                    y2="29.7415"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#32A071" />
                    <stop offset="0.0685" stopColor="#2DA771" />
                    <stop offset="0.4762" stopColor="#15CF74" />
                    <stop offset="0.8009" stopColor="#06E775" />
                    <stop offset="1" stopColor="#00F076" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a target="_blank" href={cardData?.website} className="w-[74px] h-[74px] bg-white rounded-[21px] shadow-[0px_0px_18px_0px_rgba(255,255,255,0.20)] border border-[#a6a6a6] justify-center items-center gap-2.5 flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7388 4.26118C17.0572 1.57961 12.7095 1.57961 10.0279 4.26118L9.30707 4.98203C9.01418 5.27492 9.01418 5.7498 9.30707 6.04269C9.59997 6.33558 10.0748 6.33558 10.3677 6.04269L11.0886 5.32184C13.1844 3.22605 16.5823 3.22605 18.6781 5.32184C20.7739 7.41763 20.7739 10.8156 18.6781 12.9114L17.9573 13.6322C17.6644 13.9251 17.6644 14.4 17.9573 14.6929C18.2502 14.9858 18.725 14.9858 19.0179 14.6929L19.7388 13.972C22.4203 11.2905 22.4203 6.94276 19.7388 4.26118Z"
                  fill="black"
                />
                <path
                  d="M6.04269 9.30707C6.33558 9.59997 6.33558 10.0748 6.04269 10.3677L5.32184 11.0886C3.22605 13.1844 3.22605 16.5823 5.32184 18.6781C7.41763 20.7739 10.8156 20.7739 12.9114 18.6781L13.6322 17.9573C13.9251 17.6644 14.4 17.6644 14.6929 17.9573C14.9858 18.2501 14.9858 18.725 14.6929 19.0179L13.972 19.7388C11.2905 22.4203 6.94276 22.4203 4.26118 19.7388C1.57961 17.0572 1.57961 12.7095 4.26118 10.0279L4.98203 9.30707C5.27492 9.01418 5.7498 9.01418 6.04269 9.30707Z"
                  fill="black"
                />
                <path
                  d="M14.6928 9.30707C14.9857 9.59997 14.9857 10.0748 14.6928 10.3677L10.3677 14.6928C10.0748 14.9857 9.59997 14.9857 9.30707 14.6928C9.01418 14.3999 9.01418 13.9251 9.30707 13.6322L13.6322 9.30707C13.9251 9.01418 14.3999 9.01418 14.6928 9.30707Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
