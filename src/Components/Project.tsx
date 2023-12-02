import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProjectProps = {
  name: string;
  key: string; // NOTE: 'key' is a reserved prop in React, you might want to avoid using it directly
  github: string;
  pic: string;
  tech: string;
  url: string;
  num: number;
};

const Project: React.FC<ProjectProps> = ({ name, github, pic, tech, url }) => {
  return (
    <div className="project-div" style={{ color: " rgb(0, 19, 75)" }}>
      <img
        className="project-pic-div"
        style={{ width: "100%" }}
        src={pic}
        alt="project-screenshot"
      />

      <h3>{name}</h3>
      <p className="technologies">{tech}</p>
      <a
        className="con-link"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="faIcon" icon={faGithub} size="2xl" />
      </a>
      {url !== "" && (
        <a
          className="con-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGlobe} size="2xl" />
        </a>
      )}
    </div>
  );
};

export default Project;
