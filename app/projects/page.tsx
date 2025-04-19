import ProjectCard from "@/components/cards/ProjectCard";
import { get } from "@/libs/axios/backEndServer";
import { ProjectCardTypes } from "@/libs/helpers/types";

const getData = async () => {
  try {
    const response = await get("/home");
    return response.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    return null;
  }
};
const page = async () => {
  const projectsData = await getData();
  return (
    <div className="mt-[100px] w-full flex px-[10px] md:px-0 justify-center items-center gap-[25px] flex-wrap">
      {projectsData.projects.map((project: ProjectCardTypes, index: number) => (
        <ProjectCard key={index} cardData={project} />
      ))}
    </div>
  );
};

export default page;
