import React, {Component} from "react";
import {fetchallchoices} from "../RestFunctions"
import ChangeChoice from "./ChangeChoice";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./ExpanPanel.css";

// this.props.user

class ChoicesList extends Component {
    constructor(props) {
        super(props);
        console.log('moroo');
        this.state = {relations: [{choice:'', task: {title:'', content1: '', content2:'', rating: ''}}]};
    }

    componentDidMount() {
        this.getAll();
        console.log('moroo1');
    }

    getAll() {
        fetchallchoices(this.allchoicesFetched)
        console.log('moroo2');
    }

    //sets fetched tasks to this.state
    allchoicesFetched = (data) => {
        console.log('moroo3');
        this.setState({relations: data});
        console.log('moroo6');
    };

    render() {
        console.log('moroo4', this.state.relations);
        var relations = this.state.relations
            .filter(addToList => {return addToList.choice===this.props.choice && addToList.user.uid===this.props.user})
            .map(function (choice) {
            console.log('moroo5', choice);
            return (
                <ExpansionPanel key = {choice.id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="display1">{choice.task.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="headline">
                            {choice.task.content1}<br/><hr/>

                            {choice.task.content2}<br/><hr/>

                            {choice.task.rating} <ChangeChoice choice = {choice}></ChangeChoice>
                            <br/>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        });
        // var props = this.props;

        return (
            <div>
                {relations}
            </div>
        )
    }
}


export default ChoicesList;