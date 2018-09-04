import React, {Component} from 'react';
// import "../../App.css"
import ProgressBar from "./ProgressBar";

class ChoiceHeader extends Component {
    constructor (props) {
        super(props)

        this.state = {
            percentage: ((10300-this.props.count)/10300*100)
        }
    }

    render() {
        if (this.props.choice === "1") {
            return (
                <div className="choicecomponent">
                    <h1 >Valitsemasi haasteet:</h1>
                    <p className="header-text"> Suorittamalla nämä haasteet vähennät hiilidioksidipäästöjäsi <span className="count">{this.props.count}</span> kg vuodessa. </p><br/>
                    <ProgressBar percentage={this.state.percentage} count={this.props.count}/><br/>
                </div>
            )
        } else {
            return (
                <div className="choicecomponent">
                    <h1>Hylkäämäsi haasteet:</h1>
                    <p className="header-text"> Jos kuitenkin päättäisit suorittaa nämä haasteet, vähentäisit
                        hiilidioksidipäästöjäsi <span className="count">{this.props.count}</span> kg vuodessa. </p>
                </div>
            )
        }
    }
}
export default ChoiceHeader;
