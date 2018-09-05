import React, {Component} from "react";
import {changeChoice, deleteFromRelations} from "../../RestFunctions";
import './ChoiceList.css';


class ChangeChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.choice.id,
            choice: this.props.choice.choice,
            user: this.props.choice.user,
            task: this.props.choice.task
        };
        this.handleClick = this.handleClick.bind(this);
    }

    changeThis(oldChoice) {
        if (oldChoice === "1") {
            // settingNewChoice = 0;
            this.setState({choice: "0"}, () => {
                changeChoice(this.state.id, this.state);
            });
        } else {
            // settingNewChoice = 1;
            this.setState({choice: "1"}, () => {
                changeChoice(this.state.id, this.state);
            });
        }
    }

    setNewData(e) {
        this.changeThis(this.state.choice);
        window.location.reload();
    }

    deleteThisOne(deleteThisTask) {
        deleteFromRelations(deleteThisTask);
    }

    handleClick(id, e) {
        e.preventDefault();
        this.deleteThisOne(id);
        window.location.reload();
    }

    render() {
        if (this.props.choice.choice === "1") {
            return (
                <div className="button">
                    <button  className='change-button' onClick={this.setNewData.bind(this)}>Siirrä hylättyihin</button>
                    <button className='change-button' onClick={this.handleClick.bind(this, this.props.choice.id)}>Poista</button>
                </div>
            )
        } else {
            return (
                <div className="button">
                    <button className='change-button' onClick={this.setNewData.bind(this)}>Teen sittenkin</button>
                    <button className='change-button' onClick={this.handleClick.bind(this, this.props.choice.id)}>Poista</button>
                </div>
            )}
    }
}

export default ChangeChoice;