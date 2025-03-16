import DevelopCycle from "@/components/home/DevelopCycle";
import Projects from "@/components/home/Projects";
import Team from "@/components/home/Team";
import { get } from "@/libs/axios/backEndServer";


const getData = async () => {
  try {
    const response = await get("/home");
    return response.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    return null;
  }
}

export default async function Home() {


  const homeData = await getData();


  return (
    <div className="mt-[100px]">
      <DevelopCycle  />
      <Team owners={homeData?.owners} /> {/* Pass the fetched data to Team */}
      <Projects projectsData={homeData?.projects} />
    </div>
  );
}
