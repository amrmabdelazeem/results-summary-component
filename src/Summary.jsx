import React from "react";
import Skill from "./Skill";
import data from './data.json';
import Button from "./Button";


function Summary(){
    return <div className="summary">
    <h3>Summary</h3>
    <Skill id="reaction" category={data[0].category} icon={data[0].icon} score={data[0].score} alt="reaction" />
    <Skill id="memory" category={data[1].category} icon={data[1].icon} score={data[1].score} alt="memory" />
    <Skill id="verbal" category={data[2].category} icon={data[2].icon} score={data[2].score} alt="verbal" />
    <Skill id="visual" category={data[3].category} icon={data[3].icon} score={data[3].score} alt="visual" />
    <Button/>
    </div>
}

export default Summary;