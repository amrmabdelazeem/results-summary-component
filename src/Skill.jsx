import React from "react";

function Skill(props){
    return <div className="skill" id={props.id}>
    <div className="skill-name">
    <img src={props.icon} alt={props.alt}/>
    <p>{props.category}</p>
    </div>
    <div className="skill-score">
    <p>{props.score}</p>
    <p>/ 100</p>
    </div>

    </div>
}
export default Skill;