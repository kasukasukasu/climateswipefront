import React, {Component} from "react";
import {fetchallchoices} from "../../RestFunctions"
import "../ExpanPanel.css";
import ChoiceItem from "./ChoiceItem";
import ChoiceHeader from "./ChoiceHeader"
import '../../App.css'

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
        var count = 0;
        var relations = this.state.relations.filter(addToList => {return addToList.choice===this.props.choice && addToList.user.uid===this.props.user}).map(function (choice) {
            console.log('moroo5', choice);
            count += parseInt(choice.task.rating, 10);
            return (
                <ChoiceItem choice={choice} key={choice.id}/>
            );
        });
        if (relations.length === 0) {
            return (
                <div className="stack-container">
                    <h2>Listasi on tällä hetkellä tyhjä.</h2><br/>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="/theswipe">
                        Siirry peliin tästä.
                    </a>
                </div>
            )
        } else {
            return (
                <div className="stack-container">
                    <ChoiceHeader count={count} choice={this.props.choice}/>
                    {/*<h2>Valintasi:</h2>*/}
                    {/*<p> {counter} </p>*/}
                    {relations}
                </div>

            )
        }

    }
}


export default ChoicesList;