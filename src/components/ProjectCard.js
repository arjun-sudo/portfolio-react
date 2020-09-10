import React from 'react';
import github from '/home/arjun/Personal Project/portfolio-react/src/assets/github.svg'
const ProjectCard = ({projects:name,image,deployed_url,github_url}) => {
    return (
        <div>
            <figure className="projectCard__wrapper col-md-6 col-lg-4">
                <a href={deployed_url}>
                    <img src={image} alt={"deployed url"} className={"projectCard__image"}/>
                </a>
                <div className="projectCard__title">
                <a href={github_url}>
                    <img src={github} alt={"github link"} className={"projectCard__image"}/>
                </a>
                </div>


            </figure>
        </div>
    );
};

export default ProjectCard;
