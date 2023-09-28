const AboutMe = () => {
  return (
    <div className="section-wrap">
      <p className="empty" id="aboutMe">
        empty
      </p>
      <h1 className="global-header">About</h1>
      <p className="about-text">Hey! I'm Doron Breska.</p>
      <p className="about-text">
        As a junior full-stack web developer, I merge my passion for design and
        coding to create cohesive web solutions.
        <br /> I graduated from Code Academy Berlin, where I honed my skills in
        transforming ideas into functional and visually appealing applications.
        <br />
        Beyond coding, I highly value collaboration and continuous learning,
        ensuring every project benefits from the latest innovations in web
        development.
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
          src="./src/assets/Doron2.jpg"
          alt="Profile-pic-Doron"
        />
      </div>
    </div>
  );
};

export default AboutMe;
