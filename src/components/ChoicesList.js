import React, {Component} from "react";
import {fetchallchoices} from "../RestFunctions"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        var relations = this.state.relations.filter(addToList => {return addToList.choice==='1' && addToList.user.uid===this.props.user}).map(function (choice) {
            console.log('moroo5', choice);
            return (
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography key = {choice.task.id}>{choice.task.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {choice.task.content1}<br/>

                            {choice.task.content2}<br/>

                            {choice.task.rating}<br/>
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