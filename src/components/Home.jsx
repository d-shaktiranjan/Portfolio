import "../style/home.css";
import { Link } from "react-router-dom";
import work from "../data/work.json";
import { ArrowRight, ReadCvLogoIcon } from "@phosphor-icons/react";

export const Home = () => {
  return (
    <div className="flex container min-height home-section">
      <title>Shakti Ranjan Debata | Backend Developer</title>

      <div className="flex home">
        Hey, This is
        <h1 className="main-heading block accent">Shakti Ranjan Debata.</h1>
        <span className="main-heading block">I build Backend things.</span>
        <span>
          I'm a Computer Science Engineering graduate from CV Raman Global
          University.
        </span>
        {work.showCompanySection && (
          <span>
            Currently working in{" "}
            <a href={work.companyUrl} target="__blank" className="accent">
              {work.companyName}{" "}
            </a>
            as a {work.roleInCompany}.
          </span>
        )}
        {/* home button sections */}
        <div className="home-section-buttons flex">
          <a
            href="/resume.pdf"
            className="primary-btn block icon-provider"
            target="_blank"
          >
            <span>Resume</span>
            <ReadCvLogoIcon size={20} />
          </a>
          <Link to="/skills" className="primary-btn block accent icon-provider">
            <span>Explore Skills</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      <div className="home-image">
        <img src="/static/me.png" className="my-image" alt="" />
      </div>
    </div>
  );
};
