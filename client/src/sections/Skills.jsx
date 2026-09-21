import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills-header">
        <p className="section-label">MY SKILLS</p>

        <h2>
          Tools I use to
          <br />
          build things.
        </h2>

        <p>
          I enjoy working across development and AI,
          learning new technologies and turning ideas
          into practical solutions.
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <span>01</span>
          <h3>Frontend Development</h3>
          <p>
            Building responsive and user-friendly interfaces
            using modern web technologies.
          </p>

          <div className="skill-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="skill-card">
          <span>02</span>
          <h3>Backend Development</h3>
          <p>
            Creating APIs and backend systems that connect
            applications with data and services.
          </p>

          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express</span>
            <span>REST APIs</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="skill-card">
          <span>03</span>
          <h3>AI & Machine Learning</h3>
          <p>
            Exploring machine learning and computer vision
            to build intelligent applications.
          </p>

          <div className="skill-tags">
            <span>Python</span>
            <span>PyTorch</span>
            <span>Machine Learning</span>
            <span>Computer Vision</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;