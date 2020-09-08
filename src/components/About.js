import React from 'react';
import api from '../assets/api.png'
import backend from "../assets/backend.svg"
import frontend from "../assets/frontend.svg"
import dsalgo from "../assets/ds.png"
import team from "../assets/team.png"
import inter from "../assets/inte.png"
import SkillCard from "./SkillCard";

const skills = [
    {
        icon: backend,
        title: "Backend Development",
        about: "Handle api , server , database  , using Spring Boot,Hibernate and Mysql ." },
    {
        icon: frontend,
        title: "Frontend Development",
        about: "I can build scalable cms using React.js , HTML , CSS , Bootstrap ."},
    {
        icon: api,
        title: "API Development",
        about: "Develop robust and Restful API using Spring-rest-api"
    },
    {
        icon: dsalgo,
        title: "Data Structure Algorithm",
        about: "Working hard to get best possible at Data Structure and algorithm ."
    },
    {
        icon: team,
        title: "Team Working",
        about: "I can work on team for development using Version Control tools like Git as well as interacting with team member ."
    },
    {
        icon: inter,
        title: "Interpersonal Skills",
        about: "Public Speaking , Team Work , Problem Solving , Flexibility, Empathy, Positive Attitude "
    },


]


const About = () => {
    return (

        <div className="about">
            <h6 className="about__intro">
                Hi there ! I'm <b>Arjun</b> .I live in Kathmandu , Nepal.
                I am currently studying <b>Computer Science </b> in <b>Tribhuvan University </b>.
                I am working as a <b>Software Developer Intern</b> in Texas Imaginology .
                Call me either Tech Enthusiast or Gadget Lover or evergreen learner.
                I always believe on learning and sharing .

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
