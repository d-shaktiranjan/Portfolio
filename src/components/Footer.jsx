import "../style/footer.css";
import about from "../data/about.json";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex">
      <div className="flex social-links">
        <span>
          <a target="_blank" rel="noopener noreferrer" href={about.github}>
            <i className="fa-brands fa-github"></i>{" "}
            <span className="footer-text">GitHub</span>
          </a>
        </span>
        <span>
          <a target="_blank" rel="noopener noreferrer" href={about.linkedin}>
            <i className="fa-brands fa-linkedin"></i>{" "}
            <span className="footer-text">LinkedIn</span>
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${about.email}`}
          >
            <i className="fa-regular fa-envelope"></i>{" "}
            <span className="footer-text">Email</span>
          </a>
        </span>
        <span>
          <a target="_blank" rel="noopener noreferrer" href={about.instagram}>
            <i className="fa-brands fa-instagram"></i>{" "}
            <span className="footer-text">Instagram</span>
          </a>
        </span>
      </div>
      <div className="copy-right">
        <span className="footer-text" id="copyText">
          &copy; {year} | Shakti Ranjan Debata. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
