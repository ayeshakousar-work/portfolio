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
    type: "Web Application",
    title: "Dukan Dost ",
    description:
      "A modern personal app built to help local shop owners help manage their stocks, sales and profit.",
    tags: [
      "React",
      "Vite"
    ],
    link: "https://dukan-dost-seven.vercel.app/",
  },

  {
    number: "03",
    type: "MERN Web App",
    title: "Sports App",
    description:
      " Developed a full stack web app enabling team coordination, event scheduling, and real time match updates",
    tags: [
      "Reactjs",
      "Nodejs",
      "Expressjs",
      "MongoDB",
    ],
    link: "https://sports-taupe-seven.vercel.app/",
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