import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useForm } from "@formspree/react";
import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkvakva");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      alert("Message sent successfully");
      // Clear the input fields
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    }
  }, [state.succeeded]);
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available, so kindly reach out to me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email Icon" />
              <a
                href="mailto:cristobaldaniel022@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                cristobaldaniel022@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone Icon" />
              <a
                href="tel:+2348051641240"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                +234-805-164-1240
              </a>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Lagos, Nigeria.</p>
            </div>
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
                href="https://wa.me/+2348051641240"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            ref={nameRef}
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            ref={emailRef}
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            ref={messageRef}
          ></textarea>
          <button
            type="submit"
            disabled={state.submitting}
            className="contact-submit"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
