import React from 'react';
import data from './data/projects_data'
import ProjectCard from './ProjectCard'
const Projects = () => {
    return (
       <div className="container projects">
           <div className="row">
               {

                   data.map(project=>
                       <ProjectCard key={project.name} project={project}/>)
                   })

               }
           </div>
       </div>
    );
};

export default Projects;
