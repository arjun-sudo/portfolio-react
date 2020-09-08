import React from 'react';
import java from '../assets/java.svg'
import spring from '../assets/spring.png'
import mysql from '../assets/mysql.svg'
import react from '../assets/react.png'
import js from '../assets/js.svg'
import material from '../assets/materil.png'
import python from '../assets/python.png'
import kotlin from '../assets/kotlin.png'
import linux from '../assets/linux.png'
import git from '../assets/git.png'
import intellij from '../assets/intellij.png'
import jira from '../assets/jira.png'
import android from '../assets/android.png'



import Bar from "./Bar";
const languages=[
    {
        icon:java,
        name:"Java",
        level:"90"
    },

    {
        icon:spring,
        name:"Spring Boot",
        level:"90"
    },
    {
        icon:mysql,
        name:"MySql",
        level:"90"
    },
    {
        icon:react,
        name:"React.js",
        level:"80"
    },
    {
        icon:js,
        name:"Javascript",
        level:"80"
    },
    {
        icon:material,
        name:"Material UI & BootStrap4",
        level:"75"
    },

    {
        icon:python,
        name:"python",
        level:"70"
    },
    {
        icon:kotlin,
        name:"Kotlin",
        level:"60"
    },

]
const tools=[
    {
        icon:linux,
        name:"Linux",
        level:"90"
    },
    {
        icon:git,
        name:"Version Control With Git",
        level:"90"
    },
    {
        icon:intellij,
        name:"Intellij , WebStorm , Eclipse",
        level:"90"
    },
    {
        icon:jira,
        name:"Jira , Trello ,Slack",
        level:"60"
    },

    {
        icon:android,
        name:"Android Studio",
        level:"50"
    },

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <h5 className="resume-card__title">
                        Computer Science
                    </h5>
                    <p className="resume-card__name">
                        Tribhuvan University
                    </p>
                    <p className="resume-card__details">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores atque beatae culpa cupiditate dolore doloremque enim esse est facilis, harum libero magni numquam officiis rerum, ullam ut vitae voluptates.

                    </p>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <h5 className="resume-card__title">
                        Software Developer
                    </h5>
                    <p className="resume-card__name">
                        Texas Imaginology
                    </p>
                    <p className="resume-card__details">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores atque beatae culpa cupiditate dolore doloremque enim esse est facilis, harum libero magni numquam officiis rerum, ullam ut vitae voluptates.

                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body">
                        {

                            languages.map(language =>
                            <Bar value={language}/>)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                      Tools And Technologies
                    </h5>
                    <div className="resume-language__body">
                        {
                            tools.map(tool=>
                                <Bar value={tool}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
