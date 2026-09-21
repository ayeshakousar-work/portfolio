const ProjectCard = ({ project }) => {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-number">
        {project.number}
      </div>

      <div className="project-info">
        <p className="project-type">
          {project.type}
        </p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View Project →
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;