import React from 'react';

const Bar = ({value:{icon,name,level}}) => {
    return (
        <div className={"bar"}>
            <div className="bar__wrapper">
                <span className="bar__name">
                    <img src={icon} alt={icon} className={"bar__icon"}/>{name}
                </span>
                <span>{level}</span>
            </div>
        </div>
    );
};

export default Bar;
