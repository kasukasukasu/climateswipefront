import React, {Component} from "react";
import {fetchall} from "../../RestFunctions"
import TaskItem from "./TaskItem"
import "./TaskItem.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [],
        displayedTasks: [],
        search: false};
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
    };

    render() {
      if(this.state.tasks.length > 0) {
         if(this.state.search === false) {
            return (
                <div>
                    <h2 className="taskcomponent">Esimerkkejä mahdollisista ilmastoteoista:</h2>
                    <p className="header-text">Täältä löydät kätevästi kaikki ilmastoteot.<br/></p><br/>
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
                    <TaskItem tasks={this.state.displayedTasks}></TaskItem>
                </div>
            )
        }
    } else {
                                  return (
                                          <div>
                                                                 <br/>
                                                                  <br/>
                                                                     <br/>
                                                                        <div>
                                                                            <div className="container-fluid tausta-2">
                                                                                <Card className="infocard">
                                                                                    <CardContent>
                                                                                    <br/>
                                                                                    <br/>
                                                                                    <br/>
                                                                                    <h1>Tietokantaan ei juuri nyt saada yhteyttä</h1>
                                                                                        <br/>
                                                                                        <br/>
                                                                                        <br/>
                                                                                        <br/>
                                                                                    </CardContent>
                                                                                </Card>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                  )}
    }

}

export default TasksList;