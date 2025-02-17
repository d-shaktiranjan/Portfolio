import "../style/footer.css";
import about from "../data/about.json";
import {
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  Envelope,
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
        <Component size={20} weight="bold" />{" "}
        <span className="footer-text">{name}</span>
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
        <SocialLink Component={Envelope} name="Email" link={about.email} />
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
