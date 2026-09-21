const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1>
          Ayesha
        </h1>

        <h2>
          AI & Full Stack
          <br />
          Developer
        </h2>

        <p className="hero-description">
          I build intelligent web applications and love
          turning ideas into real-world solutions.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="/Ayesha_cv.pdf" className="secondary-button"  target="_blank"
                rel="noreferrer">
            Download CV
            <span>↓</span>
            
          </a>
        
        </div>

        <div className="scroll-indicator">
          <span className="mouse-icon">↓</span>
          <span>Scroll Down</span>
        </div>

      </div>

      <div className="hero-image-container">

        <div className="image-decoration"></div>

        <div className="dot-pattern"></div>

        <div className="hero-image-wrapper">
          <img
            src="/images/profile.jpg"
            alt="Ayesha"
            className="hero-image"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;