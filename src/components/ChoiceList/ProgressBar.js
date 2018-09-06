import React from 'react';
import "./ChoiceList.css"


const ProgressBar = (props) => {
    console.log(props.count);
 //   var footprint = 11500 - props.count;
    var percentage= ((10300-props.count)/10300*100);
    console.log(percentage);
    var footprint = 10300 - props.count;
    console.log(footprint);
    return (
        <div className="bar">
            <div className="progressBar">
            <Filler percentage={percentage}/>
            </div>
            <p className="cofoot">Hiilijalanjälkesi: <span className="footcount">{footprint}</span> kg CO<sub>2</sub></p>
            <p className="fincofoot">Suomalaisen keskimääräinen hiilijalanjälki on 10 300 kg CO<sub>2</sub>.</p>
        </div>
    )
};

const Filler = (props) => {
    return <div className="filler" style={{width: `${props.percentage}%`}}/>
};

export default ProgressBar;