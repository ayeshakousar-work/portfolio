import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="experience-header">
        <p className="section-label">MY JOURNEY</p>

        <h2>
          Experience that
          <br />
          shaped me.
        </h2>

        <p>
          My professional journey has allowed me to move
          from teaching into IT and development, while
          continuously building my technical skills.
        </p>
      </div>

      <div className="experience-list">
        <article className="experience-item">
          <div className="experience-date">
            <span>01</span>
            <p>Earlier</p>
          </div>

          <div className="experience-content">
            <p className="experience-type">EDUCATION</p>

            <h3>BS Computer Science</h3>

            <h4>Riphah International University</h4>

            <p>
              Completed my Bachelor's degree in Computer Science
              with a strong interest in Artificial Intelligence,
              software development, and computer vision.
            </p>
          </div>
        </article>

        <article className="experience-item">
          <div className="experience-date">
            <span>02</span>
            <p>First Role</p>
          </div>

          <div className="experience-content">
            <p className="experience-type">INSTRUCTOR</p>

            <h3>Computer Science Instructor</h3>

            <h4>Riphah International University</h4>

            <p>
              Started my professional career as an instructor,
              where I developed communication, problem-solving,
              and technical teaching skills.
            </p>
          </div>
        </article>

       <article className="experience-item current">
  <div className="experience-date">
    <span>03</span>
    <p>July 2026 — Present</p>
  </div>

  <div className="experience-content">
    <p className="experience-type">IT INTERNEE</p>

    <h3>IT Internee</h3>

    <h4>COTHM Rawalpindi</h4>

    <p>
      Currently working as an IT internee since July 2026,
      gaining practical experience in IT systems, development,
      troubleshooting, and modern technologies.
    </p>
  </div>
</article>
      </div>
    </section>
  );
};

export default Experience;