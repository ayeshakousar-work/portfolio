import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    number: "01",
    type: "FINAL YEAR PROJECT",
    title: "Computer Vision Web Application",
    description:
      "A computer vision based application developed as my final year project, combining an intelligent model with a web-based interface.",
    tags: [
      "Computer Vision",
      "Python",
      "Machine Learning",
      "Web App",
    ],
    link: "#",
    featured: true,
  },

  {
    number: "02",
    type: "FULL STACK",
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built to showcase my development work, technical skills, and professional journey.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "#",
  },

  {
    number: "03",
    type: "MACHINE LEARNING",
    title: "Diabetes Risk Prediction",
    description:
      "A machine learning project exploring how structured health-related data can be used to predict different levels of diabetes risk.",
    tags: [
      "PyTorch",
      "Machine Learning",
      "Python",
      "Data Analysis",
    ],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="projects-header">
        <p className="section-label">SELECTED WORK</p>

        <h2>
          Things I've
          <br />
          built.
        </h2>

        <p>
          A selection of projects where I have explored
          development, artificial intelligence, and practical
          problem solving.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;