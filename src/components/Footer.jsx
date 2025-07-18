import "../style/footer.css";
import about from "../data/about.json";
import {
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  Envelope,
  XLogo,
} from "@phosphor-icons/react";

const SocialLink = ({ Component, name, link }) => {
  return (
    <span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="icon-provider"
        href={link}
      >
        <Component size={20} weight="bold" alt={name} />{" "}
      </a>
    </span>
  );
};

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex">
      <div className="flex social-links">
        <SocialLink Component={GithubLogo} name="GitHub" link={about.github} />
        <SocialLink
          Component={LinkedinLogo}
          name="Linkedin"
          link={about.linkedin}
        />
        <SocialLink
          Component={Envelope}
          name="Email"
          link={`mailto:${about.email}`}
        />
        <SocialLink Component={XLogo} name="X.com" link={about.x} />
        <SocialLink
          Component={InstagramLogo}
          name="Instagram"
          link={about.instagram}
        />
      </div>
      <div className="copy-right">
        <span className="footer-text" id="copyText">
          &copy; {year} | Shakti Ranjan Debata. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
