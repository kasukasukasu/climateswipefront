import React, {Component} from "react";
import {fetchallchoices} from "../../RestFunctions"
import ChoiceItem from "./ChoiceItem";
import ChoiceHeader from "./ChoiceHeader"
import './ChoiceList.css';

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
        var count = 0;
        var relations = this.state.relations.filter(addToList => {return addToList.choice===this.props.choice && addToList.user.uid===this.props.user}).map(function (choice) {
            count += parseInt(choice.task.rating, 10);
            return (
                <div className="expan" key={choice.id}>
                    <ChoiceItem choice={choice}/>
                </div>
            );
        });
        if (relations.length === 0) {
            return (
                <div className="list-items">
                    <h2>Listasi on tällä hetkellä tyhjä.</h2><br/>
                    <a className="button-header" href="/thechoice">Siirry peliin tästä.</a>
                </div>
            )
        } else {
            return (
                <div>
                    <ChoiceHeader count={count} choice={this.props.choice}/>
                    <div className="list-items">{relations}<br></br><br></br><br></br><br></br></div>
                </div>
            )
        }
    }
}

export default ChoicesList;