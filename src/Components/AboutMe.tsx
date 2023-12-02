import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  return (
    <div className="section-wrap">
      <h1 className="global-header">Portfolio</h1>
      <p>
        <FontAwesomeIcon
          icon={faMoon}
          size="2xl"
          style={{ color: "#00134b" }}
        />
      </p>
      <p className="about-text">Hey! I'm Doron Breska.</p>
      <p className="about-text">
        As a junior full-stack web developer, I merge my passion for design and
        coding to create cohesive web solutions. I graduated from Code Academy
        Berlin, where I honed my skills in transforming ideas into functional
        and visually appealing applications. Beyond coding, I highly value
        collaboration and continuous learning, ensuring every project benefits
        from the latest innovations in web development.
      </p>
      <p className="about-text">
        Here are the technologies I've been working with:
      </p>
      <div className="about-skills-pic">
        <div className="skills">
          <ul className="about-text">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git &#38; Github</li>
            <li>GraphQL</li>
            <li>Next.js</li>
            <li>SQL</li>
          </ul>
          <ul className="about-text">
            <li>React</li>
            <li>Node.js</li>
            <li>Typescript</li>
            <li>Firebase</li>
            <li>Mongo</li>
            <li>Express</li>
            <li>Bootstrap/Tailwind</li>
          </ul>
        </div>

        <img
          className="about-me-pic"
          src={
            "https://res.cloudinary.com/danq3q4qv/image/upload/v1695931381/Doron_2_bqckut.jpg"
          }
          alt="Profile-pic-Doron"
        />
      </div>
    </div>
  );
};

export default AboutMe;
