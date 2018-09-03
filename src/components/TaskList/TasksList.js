
import React, {Component} from "react";
import {fetchall} from "../../RestFunctions"
import TaskItem from "./TaskItem"
import "./TaskItem.css";



class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [], displayedTasks: [], search: false};
        console.log("Propsit tulee!!!!");
        console.log(this.props.user);
    }

    searchHandler(event) {
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
                    <h2 className="taskcomponent">Esimerkkejä mahdollisista ilmastoteoista:</h2>
                    <input type="text" className="search" placeholder="Hae tekoja" onChange={this.searchHandler.bind(this)}/><br/>
                    <TaskItem tasks={this.state.tasks}>
                    </TaskItem>
                </div>

            )
        } else {
            return (
                <div>
                    <h2 className="taskcomponent" >Esimerkkejä mahdollisista ilmastoteoista:</h2>
                    <input type="text" className="search" placeholder="Hae tekoja" onChange={this.searchHandler.bind(this)}/><br/><br/>
                    <TaskItem tasks={this.state.displayedTasks}>
                    </TaskItem>
                </div> )
        }

    }
}

export default TasksList;
