import React, {Component} from "react";
import '../components/SwipeGame/ItemDetailCards.css'

class ItemDetails extends Component {

    render() {
        const task = this.props.item;
        if (this.props.item !== this.props.item.length) {
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

            return (
                <div className="stack-container">
                    <div className="card-top card">
                        <h1 className="nothing-left text-center my-auto">Ei tällä hetkellä enempää haasteita,
                            ehdota meille helppoja arkipäivän ympäristöhaasteita</h1>
                    </div>
                </div>

            );
        }
    }
}


export default ItemDetails;