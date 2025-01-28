const ProjectCard = ({ title, image, description, link }) =>{
  return (
    <div
      id="project-container"
      className="flex flex-col justify-start items-center"
    >
      <a href={link} target="_blank">
        <img src={image} className="w-40 h-40" />
      </a>
      <div>
        <h1 id="orange" className="text-2xl font-semibold">
          {title}
        </h1>
        <p className="text-sm">{description} </p>
      </div>
    </div>
  );
}

export default ProjectCard;