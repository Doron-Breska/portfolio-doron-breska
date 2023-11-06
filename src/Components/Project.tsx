import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

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
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-div"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="test">
        <img
          className={hovered ? "project-pic-div hovered" : "project-pic-div"}
          style={{ width: "100%" }}
          src={pic}
          alt="project-screenshot"
        />
        <div className="links">
          <a href={github}>
            <BsGithub />
          </a>
          {url !== "" && (
            <a href={url}>
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
      <h3>{name}</h3>
      <p>Technologies:</p>
      <p className="technologies">{tech}</p>
    </div>
  );
};

export default Project;
