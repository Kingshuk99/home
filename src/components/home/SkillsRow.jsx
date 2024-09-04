import React from "react";

function SkillsRow({type, skills}){
    return(
    <div className="row mb-3">
        <div className="col-md-2 text-center">
            <p className = "h3 lead">{type}</p>
        </div>
        {skills.map((skill, index) =>(
            <div className="col-md-2" key={index}>
                <div className="card shadow-lg p-2 m-1 bg-white rounded">
                    {/* <p className="text-monospace text-center">{skill}</p> */}
                    <p className="lead text-center">{skill}</p> 
                </div>
            </div>
        ))}
    </div>
);
}

export default SkillsRow;