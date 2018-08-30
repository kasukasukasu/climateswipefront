import React, {Component} from "react";
import {fetchall} from "../RestFunctions";
var shuffle = require('shuffle-array');

class TheSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            tasks: []
        }
    }

    componentDidMount() {
        this.getAll();
        console.log();
    }

    getAll() {
        fetchall(this.allFetched)
    }

    allFetched = (data) => {
        this.setState({tasks: data});
        console.log(data);
    };

    removeTask = (task) => {
        console.log(task + " tämä id postettiin");
        this.state.tasks
            .filter(function (removedOne) {
                return removedOne.task !== task
           });
        this.setState(this.state);
        this.setState({id: (this.state.tasks.id + 1) % this.state.tasks.length});
    };

    render() {
        var shuffledArray = shuffle(this.state.tasks);
        console.log("Taskilistan pituus on = " + shuffledArray.length);
        var tasks = shuffledArray
            .map(function (tasks) {
                return (
                <div key={tasks.id}>
                    <p>{tasks.title}</p>
                    <p>{tasks.content1}</p>
                    <p>{tasks.content2}</p>
                    <p>{tasks.rating}</p>
                </div>
            );
        });

        return (
            <div>
                {tasks}
                <button onClick={this.removeTask}>Seuraava</button>
            </div>
        );
    }
}

export default TheSwipe;

