import React, {Component} from "react";
import {changeChoice} from "../RestFunctions";

class ChangeChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.choice.id,
            choice: this.props.choice.choice,
            user: this.props.choice.user,
            task: this.props.choice.task
        };
    }

    changeThis(oldChoice) {
        console.log(this.state.choice + "Ennen muutosta");
        // var settingNewChoice = (this.state.choice);

        if (oldChoice == "1") {
            // settingNewChoice = 0;
            this.setState({choice: "0"});
            console.log(this.state);
            changeChoice(this.state.id, this.state);
        } else {
            // settingNewChoice = 1;
            this.setState({choice: "1"});
            console.log(this.state);
            changeChoice(this.state.id, this.state);
        }
        // console.log("päivitetty valinta on:" + this.state.choice);
    }


    setNewData(e) {
        e.preventDefault();
        this.changeThis(this.state.choice);
    }

    render() {
        return (
            <button type='button' onClick={this.setNewData.bind(this)}>X</button>
        )
    }
}



export default ChangeChoice;