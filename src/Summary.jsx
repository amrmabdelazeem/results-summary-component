import React from "react";
import Skill from "./Skill";
import data from './data.json';
import Button from "./Button";


function Summary(){
    return <div className="summary">
    <h3>Summary</h3>
    <Skill category={data[0].category} icon={data[0].icon} score={data[0].score} />
    <Skill category={data[1].category} icon={data[1].icon} score={data[1].score} />
    <Skill category={data[2].category} icon={data[2].icon} score={data[2].score} />
    <Skill category={data[3].category} icon={data[3].icon} score={data[3].score} />
    <Button/>
    </div>
}

export default Summary;