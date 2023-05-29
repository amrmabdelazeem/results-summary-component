import React from "react";

function Skill(props){
    return <div className="skill" style={
        {display: "flex",
    justifyContent:"space-between"
        }
    }>
    <div style={{display:"flex"}}>
    <img src={props.icon} alt={props.alt}/>
    <p>{props.category}</p>
    </div>
    <div style={{display:"flex"}}>
    <p>{props.score}</p>
    <p>/ 100</p>
    </div>

    </div>
}
export default Skill;