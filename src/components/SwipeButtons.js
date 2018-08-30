import React, {Component} from "react";
import {createRelation} from "../RestFunctions";
import '../App.css';


export class Buttons extends Component {
    // constructor(props) {
    //     super(props);
    // }

    handleClick(id, choice, e) {
        e.preventDefault();
        console.log('The link was true.');
        var data = ({choice: choice, user_id: id, task_id: 1});
        console.log(data);
        createRelation(data);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this, "EOukqsHJwsgodzgrSzbu8XpYPWa2", "1")}> Lisää listaan! </button>
                <button onClick={this.handleClick.bind(this, "EOukqsHJwsgodzgrSzbu8XpYPWa2", "0" )}> Ehkä joskus myöhemmin... </button>
            </div>
        )
    }
}

export default Buttons;