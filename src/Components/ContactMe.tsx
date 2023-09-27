import "./ContactMe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <>
      <h1 className="global-header">04. Contact</h1>
      <p className="contact__text-1">
        I'm currently looking for new opportunities, my inbox is always open.
        <br />
        Whether you have a question or you want to say hi, Please click below
        &#8675;
      </p>
      <div className="contact">
        <a className="con-link" href="mailto:doronbreska@gmail.com">
          <FontAwesomeIcon
            className="faIcon"
            href="mailto:doronbreska@gmail.com"
            icon={faEnvelope}
            size="2xl"
          />
        </a>
        <a className="con-link" href="https://www.linkedin.com/in/doron-breska">
          <FontAwesomeIcon className="faIcon" icon={faLinkedin} size="2xl" />
        </a>
        <a className="con-link" href="https://github.com/Doron-Breska">
          <FontAwesomeIcon className="faIcon" icon={faGithub} size="2xl" />
        </a>
      </div>
    </>
  );
};

export default ContactMe;
