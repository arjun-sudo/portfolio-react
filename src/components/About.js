import React from 'react';
import api from '../assets/api.svg'

const skills=[
    {
        icon:api,
        title:"Title",
        about:"This is about session."
    },
    {
        icon:api,
        title:"Title",
        about:"This is about session."
    },
    {
        icon:api,
        title:"Title",
        about:"This is about session."
    },
    {
        icon:api,
        title:"Title",
        about:"This is about session."
    }

]


const About = () => {
    return (

        <div className="about">
            <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {

                        skills.map(skill=>
                        <div className="col-lg-g">
                            <div className="skill-card">
                                <img src={skill.icon} alt={"icon"} className={"skill-card__icon"}/>
                                <div className="skill-card-body">
                                    <h6 className="skill-card__title">{skill.title}</h6>
                                    <p className="skill-card__content">{skill.about}</p>

                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default About;
