import React, {Component} from "react";

class ItemDetails extends Component {
    render() {
        const s = this.props.item;
        return (
            <div className="quote">
                <p className="teksti">{s.title}</p>
            </div>
        );
    }
}

export default ItemDetails;