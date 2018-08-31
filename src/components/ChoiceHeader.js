import React, {Component} from 'react';

class ChoiceHeader extends Component {
    render() {
        if (this.props.choice === "1") {
            return (
                <div>
                    <h2>Valitsemasi haasteet:</h2>
                    <p> Suorittamalla nämä haasteet vähennät hiilidioksidipäästöjäsi {this.props.count}kg vuodessa. </p>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Hylkäämäsi haasteet:</h2>
                    <p> Jos kuitenkin päättäisit suorittaa nämä haasteet, vähentäisit
                        hiilidioksidipäästöjäsi {this.props.count}kg vuodessa. </p>
                </div>
            )
        }
    }
}
export default ChoiceHeader;
