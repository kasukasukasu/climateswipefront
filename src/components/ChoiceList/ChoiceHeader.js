import React, {Component} from 'react';
import "../../App.css"
import ProgressBar from "./ProgressBar";

class ChoiceHeader extends Component {
    constructor (props) {
        super(props)

        this.state = {
            percentage: ((11500-this.props.count)/11500*100)
        }
    }

    render() {
        if (this.props.choice === "1") {
            return (
                <div className="component">
                    <h2 >Valitsemasi haasteet:</h2>
                    <p> Suorittamalla nämä haasteet vähennät hiilidioksidipäästöjäsi <span className="count">{this.props.count}kg</span> vuodessa. </p><br/>
                    <ProgressBar percentage={this.state.percentage} count={this.props.count}/><br/>
                </div>
            )
        } else {
            return (
                <div className="component">
                    <h2>Hylkäämäsi haasteet:</h2>
                    <p> Jos kuitenkin päättäisit suorittaa nämä haasteet, vähentäisit
                        hiilidioksidipäästöjäsi <span className="count">{this.props.count}kg</span> vuodessa. </p>
                </div>
            )
        }
    }
}
export default ChoiceHeader;
