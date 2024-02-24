import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"
import "../styles/header.scss";

const Header = () => {
    const [isResponsive, setIsResponsive] = useState(false);
    console.log(isResponsive);
    
  return (
    <div className="navbar">
      <a href="#" className="logo"><span className="alpha">A</span>NKUR</a>
      <nav>
        <ul className={isResponsive ? "show-menu" : ""}>
            <li>
                <a href="#home" onClick={() => setIsResponsive(!isResponsive)}>Home</a>
            </li>
            <li>
                <a href="#about" onClick={() => setIsResponsive(!isResponsive)}>About</a>
            </li>
            <li>
                <a href="#skills" onClick={() => setIsResponsive(!isResponsive)}>Skills</a>
            </li>
            <li>
                <a href="#projects" onClick={() => setIsResponsive(!isResponsive)}>Projects</a>
            </li>
            <li>
                <a href="#contact" onClick={() => setIsResponsive(!isResponsive)}>Contact Me</a>
            </li>
        </ul>
      </nav>
      <div className="menu-icon">
        {
          isResponsive ? (
            <IoClose onClick={() => setIsResponsive(!isResponsive)} />
          ) : (
            <FaBarsStaggered onClick={() => setIsResponsive(!isResponsive)} />
          )
        }
      </div>
    </div>
  )
}

export default Header;