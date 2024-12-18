import "./Portfolio.scss";
import Socials from "../PersonalInfo/Socials/Socials";
import { Link } from "react-router-dom";
import Title from "../PersonalInfo/Title/Title";
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
      <Title />
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
