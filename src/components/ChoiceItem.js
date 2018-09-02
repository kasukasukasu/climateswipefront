import React, {Component} from 'react';
import  {} from 'react-bootstrap';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ChoiceItem extends Component {
    render() {
        return (
            <ExpansionPanel key={this.props.choice.id}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography bsStyle="success" variant="display1">{this.props.choice.task.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="headline">
                        {this.props.choice.task.content1}<br/>
                        <hr/>

                        {this.props.choice.task.content2}<br/>
                        <hr/>

                        {this.props.choice.task.rating}<br/>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default ChoiceItem;