import React, {Component} from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./TaskItem.css";

class TaskItem extends Component {
    render() {
        var tasks = this.props.tasks.map(function (task) {
            return (
                <ExpansionPanel key={task.id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="display1" className="title">{task.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="headline">
                            <p className="cardContentHeader">Tehtävä:</p>
                            <p>{task.content1}</p>
                            <hr/>
                            <p className="cardContentHeader">Lisätietoja:</p>
                            <p>{task.content2}</p>
                            <hr/>
                            <p className="cardContentHeader">Haasteen vaikuttavuus:</p>
                            <p>-{task.rating}kg hiilidioksidipäästöjä vuodessa.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        });
        return (
            <div className="task-container component">{tasks}</div>

        )
    }
}

export default TaskItem;