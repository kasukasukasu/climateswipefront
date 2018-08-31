
import React, {Component} from "react";
import {fetchall} from "../../RestFunctions"
import "../ExpanPanel.css";
import TaskItem from "./TaskItem"


class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [], displayedTasks: [], search: false};
        console.log("Propsit tulee!!!!");
        console.log(this.props.user);
    }

    searchHandler(event, e) {
        this.setState({search: true});
        let search = event.target.value.toLowerCase(),
            displayedTasks = this.state.tasks.filter((task) => {
                let searchValue = task.title.toLowerCase();
                return searchValue.indexOf(search) !== -1;
            });
        this.setState({
            displayedTasks: displayedTasks
        })
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
        if(this.state.search === false) {
            return (
                <div>
                    <span>Hae tekoja: </span>
                    <input type="text" className="search" onChange={this.searchHandler.bind(this)}/>
                    <TaskItem tasks={this.state.tasks}>
                    </TaskItem>
                </div>

            )
        } else {
            return (
                <div>
                    <span>Hae tekoja: </span>
                    <input type="text" className="search" onChange={this.searchHandler.bind(this)}/>
                    <TaskItem tasks={this.state.displayedTasks}>
                    </TaskItem>
                </div> )
        }

    }
}

export default TasksList;
