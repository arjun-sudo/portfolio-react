import React from 'react';
import java from '../assets/java.svg'
import spring from '../assets/spring.png'
import mysql from '../assets/mysql.svg'
import react from '../assets/react.png'
import js from '../assets/js.svg'
import material from '../assets/materil.png'
import linux from '../assets/linux.png'
import git from '../assets/git.png'
import intellij from '../assets/intellij.png'
import jira from '../assets/jira.png'
import android from '../assets/android.png'
import flutter from '../assets/Google-flutter-logo.png'
import aws from '../assets/aws.png'

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
        icon:flutter,
        name:"Flutter ",
        level:"70"
    },

    {
        icon:material,
        name:"Material UI ",
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
        icon: android,
        name: "Android Studio",
        level: "70"
    },
    {
        icon: aws,
        name:"Amazon Web Services",
        level: "60"
    }



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
                        Bachelor in Computer Science
                    </h5>
                    <p className="resume-card__name">
                        Tribhuvan University (2018-2022)
                    </p>
                    <p className="resume-card__details">
                        I am currently pursuing Bachelor in Computer Science from <b>Texas International College </b>, Kathmandu Nepal.

                    </p>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <h5 className="resume-card__title">
                        Java Developer
                    </h5>
                    <p className="resume-card__name">
                        FocusOne Payment Solution(Dec 2020 – April 2021)
                    </p>

                    <h5 className="resume-card__title">
                        Software Developer Intern
                    </h5>
                    <p className="resume-card__name">
                        Texas Imaginology (June 2019 – Dec 2020)
                    </p>
                    {/*<p className="resume-card__details">*/}

                    {/*    Designed and Developed <b>Student Management System</b> software for Texas*/}
                    {/*           International College .*/}

                    {/*       working as full Stack developer using <strong>Spring , React.js , REST APIs , MySQL , Hibernate /JPA , Maven*/}
                    {/*        ,  Gradle , Design Patterns .</strong>*/}

                    {/*</p>*/}



                  {/*  <p className="resume-card__details">*/}

                  {/*MOCO Digital Wallet*/}

                  {/*  </p>*/}


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
