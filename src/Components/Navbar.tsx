import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  console.log("Active link:", activeLink);

  return (
    <div id="navbar">
      <a
        href="#illustration"
        className={activeLink === "home" ? "active-link" : ""}
        onClick={() => {
          setActiveLink("home");
        }}
      >
        Home
      </a>
      <a
        href="#aboutMe"
        className={activeLink === "about" ? "active-link" : ""}
        onClick={() => setActiveLink("about")}
      >
        About Me
      </a>
      <a
        href="#projects"
        className={activeLink === "services" ? "active-link" : ""}
        onClick={() => setActiveLink("services")}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={activeLink === "contact" ? "active-link" : ""}
        onClick={() => setActiveLink("contact")}
      >
        Contact
      </a>
    </div>
  );
};

export default Navbar;
