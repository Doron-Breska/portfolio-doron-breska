import "./App.css";
import { db } from "../src/Components/FbConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Project from "./Components/Project";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type Pro = {
  id: string;
  name: string;
  technologies: string;
  github: string;
  url: string;
  pic: string;
  num: number;
};

function App() {
  const [fetchedProjects, setFetchedProjects] = useState<Pro[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const getAllProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const pArray = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Pro)
      );
      setFetchedProjects(pArray);
      console.log(fetchedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  console.log(fetchedProjects);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="section-wrap">
        <div className="header-con">
          <h2 className="global-header">Portfolio</h2>
          <div>
            {darkMode ? (
              <FontAwesomeIcon
                icon={faSun}
                size="xl"
                style={{ color: "#FFFFFF", cursor: "pointer" }}
                onClick={() => {
                  setDarkMode(false);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                size="xl"
                style={{ color: "#00134b", cursor: "pointer" }}
                onClick={() => {
                  setDarkMode(true);
                }}
              />
            )}

            <button>
              <a href="/CV.pdf" download="Doron_Breska_CV.pdf">
                Resume
              </a>
            </button>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            className="about-me-pic"
            src={
              "https://res.cloudinary.com/danq3q4qv/image/upload/v1695931381/Doron_2_bqckut.jpg"
            }
            alt="Profile-pic-Doron"
          />
          <p className="about-text">
            DORON BRESKA
            <br />
            WEB DEVELOPER
          </p>
          <p>
            <a className="con-link" href="mailto:doronbreska@gmail.com">
              <FontAwesomeIcon
                className="faIcon"
                href="mailto:doronbreska@gmail.com"
                icon={faEnvelope}
                size="2xl"
              />
            </a>
            <a
              className="con-link"
              href="https://www.linkedin.com/in/doron-breska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="faIcon"
                icon={faLinkedin}
                size="2xl"
              />
            </a>
            <a
              className="con-link"
              href="https://github.com/Doron-Breska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="faIcon" icon={faGithub} size="2xl" />
            </a>
          </p>
          <p className="about-text">
            As a junior full-stack web developer, I merge my passion for design
            and coding to create cohesive web solutions. I graduated from Code
            Academy Berlin, where I honed my skills in transforming ideas into
            functional and visually appealing applications. Beyond coding, I
            highly value collaboration and continuous learning, ensuring every
            project benefits from the latest innovations in web development.
          </p>
          <p className="about-text">
            Here are the tools and technologies I've been working with:
          </p>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git &#38; Github</li>
            <li>GraphQL</li>
            <li>Next.js</li>
            <li>SQL</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Firebase</li>
            <li>Mongo</li>
            <li>Express</li>
            <li>Bootstrap/Tailwind</li>
          </ul>
        </div>
        <h1 className="header">Projects</h1>
        <p className="about-text">
          These are the projects I have made so far. I aim to learn a new tool
          in every new project and gain more experience in what I have learned
          before. In this way, I am constantly expanding my skill set.
        </p>
      </div>

      <div className="flex-container">
        {fetchedProjects
          .sort((a, b) => b.num - a.num)
          .map((project) => {
            return (
              <Project
                key={project.id}
                name={project.name}
                github={project.github}
                pic={project.pic}
                tech={project.technologies}
                url={project.url}
                num={project.num}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
