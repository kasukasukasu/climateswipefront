import React, {Component} from "react";
import {fetchallchoices} from "../RestFunctions"

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
                <div key={choice.task.id}>
                    <h2>{choice.task.title}</h2>
                    <p>{choice.task.content1}</p>
                    <p>{choice.task.content2}</p>
                    <p>{choice.task.rating}</p>
                </div>
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