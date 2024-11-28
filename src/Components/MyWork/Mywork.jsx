import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Mywork = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <img className="projects" src={work.w_img} alt="" />
              <h3 className="project-name">{work.w_name}</h3>
              <p className="work-des">
                {expandedIndex === index
                  ? work.w_des
                  : work.w_des.split(" ").slice(0, 30).join(" ") + "..."}
              </p>
              <div className="more-icons">
                <button onClick={() => toggleDescription(index)}>
                  {expandedIndex === index ? "See less" : "See more"}
                </button>
                <div className="work-links">
                  <a
                    href={work.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={work.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mywork;
