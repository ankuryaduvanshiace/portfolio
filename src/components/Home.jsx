import React from 'react'
import "../styles/home.scss"
import Button from './Button';
import myPic1 from "../assets/myPic1.png";
import reactImg from "../assets/react.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import resume from "../data/Ankur Thakur1.pdf";

const Home = () => {
  return (
    <div className="home" id="home">
        <div className="name-section">
          <h4>Hi, I'm</h4>
          <span className="name">ANKUR THAKUR</span>
          <div className="front-design">
            <p className="front">Front End Developer</p>
            <span>&</span>
            <p className="design">Web Designer</p>
          </div>
          <div className="buttons">
            <Button className="btn"><a href="#contact">Hire Me</a></Button>
            {/* <Button className="btn">Hire Me</Button> */}
            <a href="https://drive.google.com/file/d/132nbQS9ZMX8Uev2nS4oj0b5LnXdNviBk/view?usp=sharing" target="_target" className="download">Download CV</a>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/ankuryaduvanshi/"  target="_blank" className="linkedin-icon"><FaLinkedin /></a>
            <a href="https://github.com/ankurThakur1" target="_blank" className="github-icon"><FaGithub /></a>
          </div>
        </div>
        <div className="image-section">
          <div className="border">
            <img src={myPic1} alt="My photo" className="pic" />
            <div className="react">
              <img src={reactImg} alt="React png" className="reactPng" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;
