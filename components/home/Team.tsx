"use client";

import TeamMemberCard from "./TeamMemberCard";

interface TeamMemberCard {
  name: string;
  job: string;
  image: string;
  linkedInLink?: string;
  TwiterLink?: string;
}

const Team = () => {
  // Example team member data
  const teamMembers: TeamMemberCard[] = [
    {
      name: "Mohamed Ouf",
      job: "Back-End Developer",
      image: "/home/team/mohamed.png",
      linkedInLink: "https://linkedin.com/in/alice",
      TwiterLink: "https://github.com/alice",
    },
    {
      name: "Mahmoud Eldengawy",
      job: "Mobile Applications Developer",
      image: "/home/team/mahmoud.png",
      linkedInLink: "https://linkedin.com/in/alice",
      TwiterLink: "https://github.com/alice",
    },
    {
      name: "Ebrahim Rezk ",
      job: "Front-End Developer",
      image: "/home/team/ibrahim.png",
      linkedInLink: "https://linkedin.com/in/alice",
      TwiterLink: "https://github.com/alice",
    },
    {
      name: "Mohamed Abe-Elyazed",
      job: "UI - UX Desinge",
      image: "/home/team/yazeed.png",
      linkedInLink: "https://facebook.com/bob",
      TwiterLink: "https://instagram.com/bob",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-[150px] ">
      <h2 className="text-center text-[#00ce93] text-base font-bold font-['Istok Web']">
        Team
      </h2>
      <h3 className="text-center mt-[12px] text-[#28282a] text-4xl font-bold font-['Istok Web'] capitalize">
        Our certified experts
      </h3>
      <p className="max-w-[386px] mt-[12px] text-center text-[#575757] text-base font-normal font-['Istok Web']">
        Quis eleifend quam adipiscing vitae proin sagittis nisl. Lectus
        vestibulum mattis.
      </p>

      <div className="flex flex-wrap justify-center gap-[50px] mt-[50px] ">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
