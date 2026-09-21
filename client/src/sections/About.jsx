import "./About.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-content">
        <p className="section-label">ABOUT ME</p>

        <h2>
          Building with curiosity,
          <br />
          learning with purpose.
        </h2>

        <p>
          I am Ayesha Kousar, a Computer Science graduate and
          Gold Medalist from Riphah International University.
          I have a strong interest in Artificial Intelligence
          and full-stack development.
        </p>

        <p>
          My final year project focused on computer vision,
          which I implemented as a web application. I started
          my professional journey as an instructor and later
          transitioned into IT to explore my technical skills.
        </p>

        <p>
          Currently, I am working as an IT internee at COTHM
          Rawalpindi, continuously learning and building
          practical projects.
        </p>

        <a href="#contact" className="primary-button">
          Let's Connect
        </a>
      </div>

      <div className="about-card">
        <span>01</span>
        <h3>AI & Development</h3>
        <p>
          Exploring intelligent solutions and modern web
          technologies.
        </p>
      </div>
    </section>
  );
};

export default About;