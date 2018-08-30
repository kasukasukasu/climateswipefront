
import React, {Component} from "react";
import {fetchall} from "../RestFunctions"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./ExpanPanel.css";


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
                <ExpansionPanel key = {task.id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="display1">{task.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="headline">
                            {task.content1}<br/>

                            {task.content2}<br/>

                            {task.rating}<br/>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        });
        return (
            <div>
                {tasks}
            </div>

        )

    }
}

export default TasksList;
