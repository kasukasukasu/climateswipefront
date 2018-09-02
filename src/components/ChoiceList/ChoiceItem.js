import React, {Component} from 'react';
import  {} from 'react-bootstrap';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChangeChoice from "../ChangeChoice";

class ChoiceItem extends Component {
    render() {
        return (
            <ExpansionPanel key={this.props.choice.id}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant="display1">{this.props.choice.task.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="headline">
                        <p className="cardContentHeader">Tehtävä:</p>
                        <p>{this.props.choice.task.content1}</p>
                        <hr/>
                        <p className="cardContentHeader">Lisätietoja:</p>
                        <p>{this.props.choice.task.content2}</p>
                        <hr/>
                        <p className="cardContentHeader">Haasteen vaikuttavuus:</p>
                        <p>-{this.props.choice.task.rating}kg hiilidioksidipäästöjä vuodessa. </p>
                        <ChangeChoice choice={this.props.choice}></ChangeChoice>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default ChoiceItem;

