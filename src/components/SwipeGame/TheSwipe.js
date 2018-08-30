import React, {Component} from "react";
import {fetchall} from "../../RestFunctions";
import SwipeMap from "./SwipeMap";
var shuffle = require('shuffle-array');

class TheSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            index: 0
        }
    }

    componentWillMount() {
        this.getAll();
        console.log("hei");

    }

    getAll() {
        fetchall(this.allFetched)
    }

    //sets fetched tasks to this.state
    allFetched = (data) => {
        shuffle(data);
        this.setState({tasks: data});
        console.log(data);
    };

    goToNext = () => {
        this.setState({index: (this.state.index + 1) % this.state.tasks.length});
    };

    render() {
        const item = this.state.tasks[this.state.index];
        console.log(item);
            return (
                <div>
                    <SwipeMap item={this.state.tasks} index={this.state.index}/>
                    <button onClick={this.goToNext}>next</button>
                </div>
            );
        }
}

export default TheSwipe;