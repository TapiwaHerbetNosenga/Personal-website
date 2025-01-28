import "/project1.png";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="">
      <div className="flex flex-row flex-wrap justify-center px-4">
        <ProjectCard
          title={"Podcast Application"}
          link={
            "https://6683fff8d47200623a068477--peaceful-sprinkles-579fce.netlify.app/"
          }
          image={"project1.png"}
          description={
            "This is a React application that displays a library of different podcasts that can be liked and filtered through. The audio player uses a dummy audio file. "
          }
        />
        <ProjectCard
          title={"Recipe Application"}
          link={"https://kwamaimai.vercel.app/"}
          image={"project2.png"}
          description={
            "This is a project that uses MongoDB to create a feature filled recipe finder. It has offline capabilities and a PWA.   "
          }
        />
      </div>
    </div>
  );
}
