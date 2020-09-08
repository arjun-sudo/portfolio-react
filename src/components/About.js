import React from 'react';
import api from '../assets/api.svg'
import SkillCard from "./SkillCard";

const skills = [
    {
        icon: api,
        title: "Title",
        about: "This is about session.This is about session.This is about session.This is about session.This is about session.This is about session."
    },
    {
        icon: api,
        title: "Title",
        about: "This is about session.This is about session.This is about session.This is about session.This is about session.This is about session."
    },
    {
        icon: api,
        title: "Title",
        about: "This is about session.This is about session.This is about session.This is about session.This is about session.This is about session."
    },
    {
        icon: api,
        title: "Title",
        about: "This is about session.This is about session.This is about session.This is about session.This is about session.This is about session."
    },
    {
        icon: api,
        title: "Title",
        about: "This is about session.This is about session.This is about session.This is about session.This is about session.This is about session."
    },
    {
        icon: api,
        title: "Title",
        about: "This is about session.This is about session.This is about session.This is about session.This is about session.This is about session."
    },


]


const About = () => {
    return (

        <div className="about">
            <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple
                and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {

                        skills.map(skill =>
                            <SkillCard skill={skill}/>
                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default About;
