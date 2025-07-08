import "../styles/projects.scss";
import projectsData from '../data/projectsData';
import Card from './Card';

const Projects = () => {

  return (
    <section id="projects">
        <div className="projects-section">
           <div className="heading">
             <h2 className="title-head">Proj<span className="bg-span">ects</span></h2>
           </div>
           <div className="container" style={{maxWidth: "100vw", overflowX: "scroll"}}>
             {
                projectsData.map((data) => (
                  <Card data={data} key={data.id} />
                ))
             }
           </div>
        </div>
    </section>
  )
}

export default Projects;