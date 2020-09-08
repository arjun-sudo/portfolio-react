import React from 'react';
import java from '../assets/java.svg'
import Bar from "./Bar";
const languages=[
    {
        icon:java,
        name:"Java",
        level:""
    },
    {
        icon:java,
        name:"Java",
        level:""
    },
    {
        icon:java,
        name:"Java",
        level:""
    },
    {
        icon:java,
        name:"Java",
        level:""
    },
]
const tools=[
    {
        icon:java,
        name:"Java",
        level:""
    },
    {
        icon:java,
        name:"Java",
        level:""
    },
    {
        icon:java,
        name:"Java",
        level:""
    },
    {
        icon:java,
        name:"Java",
        level:""
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
