import React from 'react'
import "../styles/skills.scss";
import skillsData from "../data/skillsData";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-section">
        <div className="heading">
          <h2 className="title-head">Ski<span className="bg-span">lls</span></h2>
        </div>
        <div className="container">
          {
            skillsData.map((data) => (
                <div key={data.id} className="skill-details">
                  <img src={data.image} className="logo" />
                  <span className="title">{data.title}</span>
                </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills;