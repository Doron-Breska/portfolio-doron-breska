import "./App.css";
import Navbar from "./Components/Navbar";
import background from "../src/assets/background.mp4";
import { db } from "../src/Components/FbConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Project from "./Components/Project";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";

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
    <>
      <Navbar />
      <section id="illustration">
        <video src={background} playsInline autoPlay muted loop></video>
      </section>
      <section id="section2">
        <AboutMe />
      </section>
      <section id="projects">
        <p className="empty">empty</p>
        <h1 className="global-header">Projects</h1>
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
      </section>
      <section id="contact" style={{}}>
        <ContactMe />
      </section>
    </>
  );
}

export default App;
