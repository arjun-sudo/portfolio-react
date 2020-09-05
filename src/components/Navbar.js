import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
    const [active, setActive] = useState('')

    useEffect(()=>{
        let currentURL=window.location.href
        console.log(currentURL);
        if(currentURL.endsWith('/'))
            setActive('About')
        else if(currentURL.endsWith('/resume'))
            setActive('Resume')
        else if(currentURL.endsWith('/projects'))
            setActive('Projects')


    },[active])
    return (
        <div className={"navbar"}>
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">


                {/*Main logic to change th components*/}

                {active !== "About" &&
               <Link to={"/"}> <div className="navbar__item" onClick={() => setActive('About')}>About</div>

               </Link>

                }

                {active !== "Resume" ?
                    <Link to={"/resume"}>
                    <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                    </Link>   : null

                }

                {active !== "Projects" &&
                <Link to={"/projects"}>
                <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>
                </Link>

                }
            </div>

        </div>
    );
};

export default Navbar;
