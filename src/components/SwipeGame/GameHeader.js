import React, {Component} from 'react';
import ProgressBar from "../ChoiceList/ProgressBar";
// import ChoiceHeader from "../ChoiceList/ChoiceHeader";
// import {fetchallchoices} from "../../RestFunctions";

class GameHeader extends Component {
    render() {
        var count = this.props.count;
        if (count > 9000) {
            count=10300-9000;
        } else {
            count = this.props.count
        }
        return (
            <div className="container-fluid tausta-2">
                <div className="gameProgress">
                <ProgressBar count={count}/><br/>
                </div>
            </div>
        )
    }
}

export default GameHeader;