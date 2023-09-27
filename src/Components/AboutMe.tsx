const AboutMe = () => {
  return (
    <>
      <p className="empty" id="aboutMe">
        empty
      </p>
      <h1 className="global-header">02. About</h1>
      <div className="about">
        <div className="about__aboutRow">
          <div className="about__body">
            <p>Hey! I'm Doron Breska.</p>
            <br />
            <p>
              As a junior full-stack web developer, I merge my passion for
              design and coding to create cohesive web solutions.
              <br /> I graduated from Code Academy Berlin, where I honed my
              skills in transforming ideas into functional and visually
              appealing applications. <br />
              Beyond coding, I highly value collaboration and continuous
              learning, ensuring every project benefits from the latest
              innovations in web development.
            </p>
            <br />

            <p>Here are the technologies I've been working with:</p>
            <br />
            <div className="about__body-skills">
              <ul className="about__body-skills-1">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Git &#38; Github</li>
                <li>GraphQL</li>
                <li>Next.js</li>
              </ul>
              <ul className="about__body-skills-2">
                <li>React</li>
                <li>Node.js</li>
                <li>Typescript</li>
                <li>Firebase</li>
                <li>Mongo</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
          <div className="about__image">
            <img
              className="about-me-pic"
              src={
                "https://res.cloudinary.com/danq3q4qv/image/upload/v1692568541/Doron_ns7a4z.jpg"
              }
              alt="Profile-pic-Doron"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
