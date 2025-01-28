import "../style/home.css";
import { Link } from "react-router-dom";
import work from "../data/work.json";

export const Home = () => {
  return (
    <div className="flex container min-height home-section">
      <title>Shakti Ranjan Debata | Backend Developer</title>
      <div className="flex home">
        Hey, This is
        <span className="main-heading block accent">Shakti Ranjan Debata.</span>
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
        <Link to="/skills" className="primary-btn block accent">
          Explore Skills <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="home-image">
        <img src="/static/me.png" className="my-image" alt="" />
      </div>
    </div>
  );
};
