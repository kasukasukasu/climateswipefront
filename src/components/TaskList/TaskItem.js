import React, {Component} from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class TaskItem extends Component {
    render() {
        var tasks = this.props.tasks.map(function (task) {
            return (
                <ExpansionPanel key={task.id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
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
            )
        });
        return (
            <div>{tasks}</div>
        )
    }
}

export default TaskItem;