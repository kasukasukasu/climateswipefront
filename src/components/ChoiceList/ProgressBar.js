import React from 'react';
import "./ChoiceList.css"

const ProgressBar = (props) => {
    console.log("hei");
    var footprint = 11500 - props.count;
    return (
        <div className="bar">
            <div className="progressBar">
            <Filler percentage={props.percentage}/>
            </div>
            <p className="cofoot">Hiilijalanjälkesi: <span className="footcount">{footprint}</span> kg CO<sub>2</sub></p>
            <p className="fincofoot">Suomalaisen keskimääräinen hiilijalanjälki on 11 500 kg CO<sub>2</sub>.</p>
        </div>
    )
};

const Filler = (props) => {
    return <div className="filler" style={{width: `${props.percentage}%`}}/>
};

export default ProgressBar;