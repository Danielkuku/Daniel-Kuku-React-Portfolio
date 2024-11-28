import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Daniel from "../../assets/Daniel.jpeg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Daniel} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a creative Frontend Developer dedicated to building
              responsive, user-friendly web applications. With expertise in
              React, TypeScript, JavaScript, and CSS, I transform ideas into
              interactive designs. I thrive on solving challenges and delivering
              seamless digital experiences.
            </p>
            <p>
              My passion for frontend development shines through my experience,
              as well as the enthusiasm and dedication I bring to every project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr className="hr-90" />
            </div>
            <div className="about-skill">
              <p>Taiwind CSS</p> <hr className="hr-90" />
            </div>
            <div className="about-skill">
              <p>React</p> <hr className="hr-70" />
            </div>
            <div className="about-skill">
              <p>TypeScript</p> <hr className="hr-60" />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr className="hr-70" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievement"></div>
    </div>
  );
};

export default About;
