import React, {Component} from "react";
import ItemDetails from "./ItemDetails";

class SwipeMap extends Component {
    render() {
        const oneItem = this.props.item.map((item)=> {
            return <ItemDetails item={item} key={item.id}/>
        });
        return (<div className="swipemap">
                {oneItem[this.props.index]}
            </div>
        );
    }
}

export default SwipeMap;