import Link from "next/link";
import ProjectCard from "../cards/ProjectCard";
import { ProjectCardTypes } from "@/libs/helpers/types";

const Projects = ({ projectsData }: { projectsData: [ProjectCardTypes] }) => {
  return (
    <div className="w-full mt-[100px] ">
      <h2 className="w-full flex items-center justify-center text-center text-[#28282a] text-4xl font-bold font-[Istok Web] capitalize ">
        Our Projects
      </h2>
      <div className="w-full flex px-[10px] md:px-0 justify-center items-center gap-[25px] flex-wrap mt-[50px] ">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} cardData={project} />
        ))}
      </div>
      <div className="w-full mt-[80px] flex items-center justify-center ">
        <Link
          href="/projects"
          className="w-[193px] h-[66px] bg-[#00ce93] rounded-[20px] flex justify-center items-center text-center text-white text-xl font-normal font-[Inter] leading-[50px]"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
