import React from "react";
import "./Hero.css";
import Daniel from "../../assets/Daniel.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={Daniel} alt="" />
      <h1>
        <span>I'm Daniel,</span> a Frontend Developer based in Lagos, Nigeria.
      </h1>
      <p>
        Hi! I’m a passionate Frontend Developer crafting seamless, user-focused
        web experiences with React, TypeScript, JavaScript, and CSS. I bring
        ideas to life with clean code and creative design.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            href="https://danielkukuportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            See My JS Portfolio
          </a>
        </div>
        {/* <div className="hero-resume">My Resume</div> */}

        <div className="socials">
          <a
            className="socials-icons"
            href="https://www.linkedin.com/in/daniel-kuku-219a151b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="socials-icons"
            href="https://github.com/Danielkuku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="socials-icons"
            href="mailto:cristobaldaniel022@gmail.com"
          >
            <MdEmail />
          </a>
          <a
            className="socials-icons"
            href="https://wa.me/+2348051641240"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
