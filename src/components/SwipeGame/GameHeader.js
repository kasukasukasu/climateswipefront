import React, {Component} from 'react';
import ProgressBar from "../ChoiceList/ProgressBar";
import ChoiceHeader from "../ChoiceList/ChoiceHeader";
import {fetchallchoices} from "../../RestFunctions";

class GameHeader extends Component {

    render() {
        return (
            <div className="container-fluid tausta-2">
                <div className="gameProgress">
                <ProgressBar percentage={this.props.percentage} count={this.props.count}/><br/>
                </div>
            </div>
        )
    }
}

export default GameHeader;