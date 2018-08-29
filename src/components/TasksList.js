import React, {Component} from "react";
import {fetchall} from "../RestFunctions"
import Buttons from "./SwipeButtons";

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        fetchall(this.allFetched)
    }

    //sets fetched tasks to this.state
    allFetched = (data) => {
        this.setState({tasks: data});
        console.log(this.state.tasks);
    };

    render() {

        var tasks = this.state.tasks.map(function (task) {
            return (
                    <details key={task.id}>
                        <summary>{task.title}</summary>
                        <p>{task.content1}</p>
                        <p>{task.content2}</p>
                        <p>{task.rating}</p>
                    </details>
            );
        });

        return (
            <div>
                {tasks}
                <Buttons/>
            </div>

        )

    }
}

export default TasksList;

