import "./Navbar.css";
import logo from "../../assets/my_logo.jpg";
import { useRef, useState, useEffect } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <img onClick={openMenu} className="nav-open" src={menu_open} alt="" />
      <ul ref={menuRef} className="nav_menu">
        <img
          onClick={closeMenu}
          src={menu_close}
          alt=""
          className="nav-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("About Me")}>About Me</p>{" "}
          </AnchorLink>
          {menu === "About Me" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#mywork">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </AnchorLink>
          {menu === "Contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav_contact">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p>Connect With Me</p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
