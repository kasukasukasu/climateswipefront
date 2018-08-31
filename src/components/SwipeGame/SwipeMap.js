import React, {Component} from "react";
import ItemDetails from "./ItemDetailsCard";

class SwipeMap extends Component {
    render() {
        const oneItem = this.props.item.map((item)=> {
            return <ItemDetails item={item} key={item.id} user={this.props.user} goToNext={this.props.goToNext}/>
        });
        return (<div className="swipemap">
                {oneItem[this.props.index]}
            </div>
        );
    }
}

export default SwipeMap;