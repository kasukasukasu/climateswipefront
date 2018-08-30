import React, {Component} from "react";
import {createRelation, fetchall,} from "../../RestFunctions";
import SwipeMap from "./SwipeMap";
import './ActionCards.css';


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

    goToNext = (user_id, task, choice) => {
        this.setState({index: (this.state.index + 1) % this.state.tasks.length});
        console.log('The link was clicked.');
        var data = ({choice: choice, user_id: user_id, task_id: task.id});
        console.log(data);
        console.log(task);
        createRelation(data);
    };


    render() {
        const item = this.state.tasks[this.state.index];
        console.log(item);
            return (
                <div>
                    <SwipeMap item={this.state.tasks} index={this.state.index}/>
                    <div className="buttons">
                        <span className="left">
                    <button className="card-button pass" onClick={this.goToNext.bind(this, this.props.user, this.state.tasks[this.state.index], "0")}>Ei</button>
                        </span>
                        <span className="right">
                    <button className="card-button like" onClick={this.goToNext.bind(this, this.props.user, this.state.tasks[this.state.index], "1")}>Kyllä</button>
                        </span>
                    </div>
                </div>
            );
        }
}

export default TheSwipe;