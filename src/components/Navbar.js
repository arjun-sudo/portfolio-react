import React from 'react';

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className="navbar__active">
                About
            </div>
            <div className="navbar__items">
                <div className="navbar__item">About</div>
                <div className="navbar__item">Resume</div>
                <div className="navbar__item">Projects</div>
            </div>

        </div>
    );
};

export default Navbar;
