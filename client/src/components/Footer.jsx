import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#home" className="footer-logo">
          Ayesha<span>.</span>
        </a>

        <p>
          Building, learning, and growing through technology.
        </p>
      </div>

      <div className="footer-right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ayesha Kousar. All rights reserved.</p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;