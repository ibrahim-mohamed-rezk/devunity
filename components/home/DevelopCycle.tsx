"use client";
import { useState } from "react";

interface cycleDataType {
  id?: number;
  title: string;
  description: string;
}

const DevelopCycle = () => {
  const cycleData: cycleDataType[] = [
    {
      id: 0,
      title: "iOS  development",
      description:
        "At devunity , we specialize in crafting exceptional web solutions that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable web platforms tailored to your specific needs.",
    },
    {
      id: 1,
      title: "Android development",
      description:
        "At devunity , we specialize in crafting exceptional web solutions that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable web platforms tailored to your specific needs.",
    },
    {
      id: 2,
      title: "Web development",
      description:
        "At devunity , we specialize in crafting exceptional web solutions that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable web platforms tailored to your specific needs.",
    },
    {
      id: 3,
      title: "UI/UX design",
      description:
        "At devunity , we specialize in crafting exceptional web solutions that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable web platforms tailored to your specific needs.",
    },
    {
      id: 4,
      title: "Testing",
      description:
        "At devunity , we specialize in crafting exceptional web solutions that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable web platforms tailored to your specific needs.",
    },
    {
      id: 5,
      title: "Launch",
      description:
        "At devunity , we specialize in crafting exceptional web solutions that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable web platforms tailored to your specific needs.",
    },
    {
      id: 6,
      title: "IT consulting",
      description:
        "At devunity , we specialize in crafting exceptional web solutions that help businesses thrive in the digital world. Our team is dedicated to delivering user-friendly, innovative, and scalable web platforms tailored to your specific needs.",
    },
  ];

  const [activeCycle, setActiveCycle] = useState(0);
  return (
      <div className="flex flex-col sm:flex-row items-start justify-center gap-[120px] ">
        <ul className="flex w-[250px] flex-col items-start justify-start gap-[15px]  ">
          {cycleData.map((data) => (
            <li
              onClick={() => setActiveCycle(data.id as number)}
              key={data.id}
              className={`flex gap-[12px]  text-[20px] text-nowrap cursor-pointer  ${
                data.id === activeCycle
                  ? "text-[#101828] font-semibold border-b border-[var(--primary-color)]"
                  : "text-[#1D2939] font-normal"
              }`}
            >
              <span>{data.title}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.2635 6.26361C8.91203 6.61508 8.91203 7.18493 9.26351 7.5364L13.7271 12L9.2635 16.4636C8.91203 16.8151 8.91203 17.3849 9.26351 17.7364C9.61498 18.0879 10.1848 18.0879 10.5363 17.7364L15.6363 12.6364C15.9878 12.2849 15.9878 11.715 15.6363 11.3636L10.5363 6.2636C10.1848 5.91213 9.61498 5.91213 9.2635 6.26361Z"
                  fill="#00CE93"
                />
              </svg>
            </li>
          ))}
        </ul>

        {/* dynamic display data */}
        <div className="flex max-w-[500px] flex-col items-start justify-start gap-[]">
          <h2 className="font-bold text-[36px] text-[#101828] ">
            Full development cycle
          </h2>
          <span className="font-[500] text-[15px] text-[#101828] ">
            We use proven technologies
          </span>

          <div className="mt-[50px]  ">
            <h2 className="font-semibold text-[20px] text-[#101828]">
              {cycleData[activeCycle].title}
            </h2>
            <p className="font-normal text-[17px] mt-[15px] text-[#344054]">
              {cycleData[activeCycle].description}
            </p>
          </div>
        </div>
      </div>
  );
};

export default DevelopCycle;
