import React, {Component} from "react";
import {fetchallchoices} from "../../RestFunctions"
import ChoiceItem from "./ChoiceItem";
import ChoiceHeader from "./ChoiceHeader"
import './ChoiceList.css';

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
                <div className="expan" key={choice.id}>
                    <ChoiceItem choice={choice}/>
                </div>
            );
        });
        if (relations.length === 0) {
            return (
                <div className="list-items">
                    <h2>Listasi on tällä hetkellä tyhjä.</h2><br/>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="/thechoice">
                        Siirry peliin tästä.
                    </a>
                </div>
            )
        } else {
            return (
                <div>
                    <ChoiceHeader count={count} choice={this.props.choice}/>
                    <div className="list-items">
                    {relations}
                    </div>
                </div>

            )
        }

    }
}


export default ChoicesList;