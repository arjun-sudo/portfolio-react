import React from "react";
import fb from "../assets/fb.svg"
import linkedin from "../assets/linkedin.svg"
import resume from "../assets/resume.svg"
import github from "../assets/github.svg"
import insta from "../assets/insta.svg"
import pin from "../assets/pin.svg"
import avatar from "../assets/avatar.svg"

const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <img src={avatar} alt={"avatar"} className={"sidebar__avatar"}/>
            <div className={"sidebar__name"}>
                Arjun <span>Gautam</span>
            </div>
            <div className={"sidebar__item sidebar__title"}>Full Stack Developer</div>
            <a href={"#"}>
                <div className="sidebar__item">
                    <img src={resume} alt={"resume"} className={"sidebar__icon"}/>Download
                    Resume
                </div>
            </a>
            <figure className={"sidebar__social-icons"}>
                <a href={""}>
                    {" "}
                    <img src={linkedin} alt={"linkedin"} className={"sidebar__icon"}/>
                </a>
                <a href={""}>
                    <img src={fb} alt={"facebook"} className={"sidebar__icon"}/>
                </a>

                <a href={""}>
                    {" "}
                    <img src={insta} alt={"instagram"} className={"sidebar__icon"}/>{" "}
                </a>
            </figure>
            <div className="contact">
                <div className="sidebar__item">
                    <a href={""}>
                        <img src={github} alt={"github"} className={"sidebar__icon"}/>
                    </a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt={""} className={"sidebar__icon"}/>
                </div>
                <div className="sidebar__item">laserarjun@gmail.com</div>
                <div className={"sidebar__item"}>9863482273/9861616143</div>
            </div>
            <div className="sidebar__item sidebar__email">email me</div>
        </div>
    );
};

export default Sidebar;
