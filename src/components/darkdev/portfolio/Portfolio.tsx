import "./Portfolio.scss";
import Socials from "../intro/about-me/Socials/Socials";
import { Link } from "react-router-dom";
import Title from "../intro/about-me/Title/Title";
import ProjectsTable from "./projects/ProjectsTable";

const Portfolio = () => {
  const title = "My Projects";

  return (
    <div className="Portfolio">
      <div className="back-home">
        <Link to={"/"}>
          <span className="arrow">&larr;</span> <span className="underline">Back Home</span>
        </Link>
      </div>
      <Title title={title} />
      <div className="sidebar">
        <Socials direction="vertical" />
      </div>
      <div className="projects">
        <ProjectsTable />
      </div>
    </div>
  );
};

export default Portfolio;
