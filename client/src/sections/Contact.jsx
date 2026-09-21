import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact-content">
        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Let's build something
          <br />
          meaningful.
        </h2>

        <p>
          I am open to opportunities where I can learn,
          contribute, and grow as a developer. If you have
          a project, opportunity, or just want to connect,
          feel free to reach out.
        </p>

        <a
          href="mailto:ayeshakousar.work@gmail.com"
          className="contact-email"
        >
          ayeshakousar.work@gmail.com
        </a>

        <div className="contact-links">
          <a
            href="https://linkedin.com/in/ayesha-kousar"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/ayeshakousar-work"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a href="/Ayesha_cv.pdf" download>
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;