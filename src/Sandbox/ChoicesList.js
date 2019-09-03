import React, {Component} from "react";
import {fetchallchoices} from "../RestFunctions"
import ChangeChoice from "../components/ChoiceList/ChangeChoice";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../components/ExpanPanel.css";

// this.props.user

class ChoicesList extends Component {
    constructor(props) {
        super(props);

        this.state = {relations: [{choice:'', task: {title:'', content1: '', content2:'', rating: ''}}]};
    }

    componentDidMount() {
        this.getAll();

    }

    getAll() {
        fetchallchoices(this.allchoicesFetched)

    }

    //sets fetched tasks to this.state
    allchoicesFetched = (data) => {
        this.setState({relations: data});
    };

    render() {

        var relations = this.state.relations
            .filter(addToList => {return addToList.choice===this.props.choice && addToList.user.uid===this.props.user})
            .map(function (choice) {

            return (
                <ExpansionPanel key = {choice.id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="display1">{choice.task.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="headline">
                            {choice.task.content1}<br/><hr/>

                            {choice.task.content2}<br/><hr/>

                            {choice.task.rating}
                            <ChangeChoice choice = {choice} kukkuu={this}></ChangeChoice>
                            <br/>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        });


        return (
            <div>
                {relations}
            </div>
        )
    }
}


export default ChoicesList;