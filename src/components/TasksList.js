import React, {Component} from "react";
import {fetchall} from "../RestFunctions"
import Buttons from "./SwipeButtons";

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
        console.log("Propsit tulee!!!!");
        console.log(this.props.user);
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
        // var props = this.props;
        return (
            <div>
                {tasks}
                <Buttons userid={this.props.user}/>
            </div>

        )

    }
}

export default TasksList;

