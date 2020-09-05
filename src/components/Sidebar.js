import React from "react";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";
import resume from "../assets/resume.svg";
import github from "../assets/github.svg";
import insta from "../assets/insta.svg";
import pin from "../assets/pin.svg";
import avatar from "../assets/avatar.svg";
import GitHubButton from 'react-github-btn'

const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <img src={avatar} alt={"avatar"} className={"sidebar__avatar"} />
      <div className={"sidebar__name"}>
        Arjun <span>Gautam</span>
      </div>
      <div className={"sidebar__item sidebar__title"}>Full Stack Developer</div>
      {/*<a href={"#"}>*/}
      {/*<div className="sidebar__item sidebar__resume">*/}
     <div>
         <button className="btn">
        <i className="fa fa-download"></i> Download Resume
      </button>
     </div>


        {/*</div>*/}
      {/*</a>*/}
      {/*  <div className="sidebar__item sidebar__github">*/}
      {/*      <a href={""}>*/}
      {/*          <img src={github} alt={"github"} className={"sidebar__icon"} />*/}
      {/*      </a>*/}
      {/*      &nbsp;    Github*/}
      {/*  </div>*/}
      {/*  */}
<div className={"github"}>
                <GitHubButton href="https://github.com/arjun-sudo" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-size="large" aria-label="Follow @arjun-sudo on GitHub">Follow @arjun-sudo</GitHubButton>
</div>
      <div className="sidebar__contact">

          <figure className={"sidebar__social-icons my-2"}>
              <a href={"https://www.linkedin.com/in/arjun-gautam-laser"} target={"_blank"}>
                  {" "}
                  <img
                      src={linkedin}
                      alt={"linkedin"}
                      className={"sidebar__icon mr-3"}
                  />
              </a>
              <a href={"https://www.facebook.com/people/Arjun-Gautam/100010140661075"} target={"_blank"}>
                  <img src={fb} alt={"facebook"} className={"sidebar__icon mr-3"} />
              </a>

              <a href={"https://www.instagram.com/laserarjun/"} target={"_blank"}>
                  {" "}
                  <img src={insta} alt={"instagram"}  className={"sidebar__icon"} />{" "}
              </a>
          </figure>
        <div className="sidebar__location">
          <img src={pin} alt={""} className={"sidebar__icon"} />
          Kathmandu, Nepal
        </div>
        <div className="sidebar__item">laserarjun@gmail.com</div>
        <div className={"sidebar__item"}>9863482273/9861616143</div>
      </div>
      <div className="sidebar__item sidebar__email">email me</div>
    </div>
  );
};

export default Sidebar;
