import React, {Component} from 'react';

class ChoiceHeader extends Component {
    render() {
        if (this.props.choice === "1") {
            return (
                <div className="component">
                    <h2 >Valitsemasi haasteet:</h2>
                    <p> Suorittamalla nämä haasteet vähennät hiilidioksidipäästöjäsi <span className="count">{this.props.count}kg</span> vuodessa. </p>
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
