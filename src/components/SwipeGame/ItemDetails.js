import React, {Component} from "react";
import './ActionCards.css'

class ItemDetails extends Component {
    render() {
        const task = this.props.item;
        return (
            <div className="quote">
                {/*<p className="teksti">{task.title}</p>*/}
                <div>
                    <div className="stack-container">
                        <div className="card-top card">
                            <div className="text-card-this">
                                <h1>{task.title}</h1>
                                <p>{task.content1}</p>
                                <p>{task.content2}</p>
                                <p>{task.rating}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetails;