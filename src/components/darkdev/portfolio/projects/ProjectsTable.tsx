import Tech from "../../helpers/Tech/Tech";
import "./ProjectsTable.scss";
import { IColumn, Project, projectsData as projects } from "../../../../temp/data/projectsData";
import { projectColumns as columns } from "../../../../temp/data/projectsData";
import { Link } from "react-router-dom";

const ProjectsTable = () => {
  return (
    <div className="ProjectsTable">
      <table>
        <TableHead columns={columns} />
        <TableBody projects={projects} />
      </table>
    </div>
  );
};

const TableHead = ({ columns }: any) => (
  <thead>
    <tr>
      {columns.map((column: IColumn, index: number) => (
        <th className={column.name} key={index}>
          {column.title}
        </th>
      ))}
    </tr>
  </thead>
);

const TableBody = ({ projects }: any) => (
  <tbody>
    {projects.map((project: any, index: number) => (
      <TableRow key={index} project={project} />
    ))}
  </tbody>
);

const TableRow = ({ project }: any) => (
  <tr>
    <td className="year">{project["year"]}</td>
    <td className="project">{project["project"]}</td>
    <td className="madeAt">{project["madeAt"]}</td>
    <td className="tech">
      {
        <ul>
          {project["tech"].map((tech: string, index: number) => (
            <Tech key={index} name={tech} />
          ))}
        </ul>
      }
    </td>
    <td className="link">
      {project["link"] && (
        <Link to={project["link"]} target="_blank">
          <span className="underline">{project["link"]}</span>{" "}
          <span>&#8599;</span>
        </Link>
      )}
    </td>
  </tr>
);

export default ProjectsTable;
