import React, {Component} from "react";
import {fetchall, fetchTask, fetchTasksIds} from "../RestFunctions";
var shuffle = require('shuffle-array');

class SwipeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: [],
            index: 0
        }
    }

    goToNext = () => {
        this.setState({ index: (this.state.index + 1) % this.state.tasks.length });
    };

    componentDidMount() {
        this.getIds();
        console.log("hei");

    }

    //Asettaa kaikki ID:t stateen shufflatussa järjestyksessä.
    allIds = (idData) => {
        console.log(idData);
        shuffle(idData);
        this.setState({tasks: idData});
    };

    //Hakee kaikki ID:t
    getIds() {
        fetchTasksIds(this.allIds)
    };

    render() {
        const item = this.state.ids[this.state.index];
        return (<div>
            <p>{item}</p>
            <button onClick={this.goToNext}>next</button>
        </div>);
    }
}
    //
    // render() {
    //     return (
    //         <div>
    //             <p>{this.state.tasks}</p>
    //             <button onClick={this.goToNextid}>Seuraava</button>
    //         </div>
    //     );

        // var shuffledArray = (this.state.tasks);
        // console.log("Taskilistan pituus on = " + shuffledArray.length);
        // var tasks = shuffledArray
        //     .map(function (tasks) {
        //         return (
        //         <div key={tasks.id}>
        //             <p>{tasks.title}</p>
        //             <p>{tasks.content1}</p>
        //             <p>{tasks.content2}</p>
        //             <p>{tasks.rating}</p>
        //         </div>
        //     );

        // return (
        //     <div>
        //         <p>Hei!</p>
        //
        //     </div>
        // );
// }
// }

export default SwipeTest;

