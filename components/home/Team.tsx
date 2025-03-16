"use client";

import TeamMemberCard from "../cards/TeamMemberCard";

const Team = ({ owners }: { owners: [any] }) => {
  return (
    <div className="flex flex-col container items-center justify-center  ">
      <h2 className="text-center text-[#00ce93] text-base font-bold font-['Istok Web'] mt-[150px]">
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
        {owners.map((member, index) => (
          <TeamMemberCard key={index} memberData={member}  />
        ))}
      </div>
    </div>
  );
};

export default Team;
