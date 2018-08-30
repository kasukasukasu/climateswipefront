import React, {Component} from "react";
import {createRelation} from "../RestFunctions";
import '../App.css';


export class Buttons extends Component {

    handleClick(id, choice, e) {
        e.preventDefault();
        console.log('The link was clicked.');
        var data = ({choice: choice, user_id: id, task_id: 1});
        console.log(data);
        createRelation(data);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this, this.props.userid, "1")}> Lisää listaan! </button>
                <button onClick={this.handleClick.bind(this, this.props.userid, "0" )}> Ehkä joskus myöhemmin... </button>
            </div>
        )
    }
}

export default Buttons;