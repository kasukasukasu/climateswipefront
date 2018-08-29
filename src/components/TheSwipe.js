import React, {Component} from "react";
import {fetchall} from "../RestFunctions"

class TheSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            tasks: [props]
        };
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        fetchall(this.allFetched)
    }

    allFetched = (data) => {
        this.setState({tasks: data});
    };

    goToNext = () => {
        this.setState({id: (this.state.id + 1) % this.state.tasks.length});
        console.log("Haloo" + this.state.id);
    };

    removeTask = (id) => {
        this.state.tasks
            .filter(function (removeid) {
                return removeid.id !== id
           });
        this.setState(this.state);
        console.log(id + " tämä id postettiin");
    };

    render() {
        var shuffle = require('shuffle-array');
        var shuffledArray = shuffle(this.state.tasks);
        console.log("Taskilistan pituus on = " + this.state.tasks.length);
        var tasks = shuffledArray
            .filter(function (tasks) {
                return (tasks.length - (tasks.length - 1));
            })
            .map(function(tasks) {
                return (
                <details>
                    <summary>{tasks.title}</summary>
                    <p>{tasks.content1}</p>
                    <p>{tasks.content2}</p>
                    <p>{tasks.rating}</p>
                </details>
            );
        });

        return (
            <div>
                {tasks}
                <button onClick={this.goToNext && this.removeTask}>Seuraava</button>
            </div>
        )
    }
}




//     render() {
//
//         const item = this.state.tasks;
//         console.log(item);
//
//
//
//
//
//
//         return (
//             <div>
//                 <details>
//                 <summary>{item.title}</summary>
//                 <p>{item.content1}</p>
//                 <p>{item.content2}</p>
//                 <p>{item.rating}</p>
//                 </details>
//
//             </div>
//         );
//     }
// }

// && this.removeTask

export default TheSwipe;

