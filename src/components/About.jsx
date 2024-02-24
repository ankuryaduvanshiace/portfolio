import React from 'react'
import "../styles/about.scss";
import aboutMe from "../assets/aboutme.jpg";

const About = () => {
    // create section width 100% then container to contain width
  return (
    
    <div className="about" id="about">
      <div className="heading">
        <h2 className="title-head">About <span className="bg-span">Me</span></h2>
      </div>
      <div className="container">
        <div className="left-section">
          <div className="about-image">
            <img src={aboutMe} alt="About me image" />
          </div>
        </div>
        <div className="right-section">
          <div className="about-desc">
            <p>Hello Everyone! My name is <span>Ankur Thakur</span> from <span>Khurja</span>. I completed my graduation in accounting (B.Com) and worked in this field. However, my fascination for the IT industry led me to explore web development. I've taught myself Front-End Web Development and found a true passion in creating websites. Looking ahead, I plan to delve into the MERN Stack to evolve into a Full Stack Web Developer. Excited for the journey ahead!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;