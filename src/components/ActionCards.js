import React, { Component } from 'react';
import './ActionCards.css'
import {fetchall} from "../RestFunctions";

class ActionCards extends Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.choosingYes = this.choosingYes.bind(this);
        this.choosingNo = this.choosingNo.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.surveyFinished = this.surveyFinished.bind(this);
        this.state = {
            i: 0,
            tasks: [],
        };

    };

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyPress);
        this.getAll();
    };


    getAll() {
        fetchall(this.allFetched)
    }

    //sets fetched tasks to this.state
        allFetched = (data) => {
        this.setState({tasks: data});
        console.log(this.setState.data);
    };

    cardData =
    [
        { title: 'Kasvissyönti', content: "Vietä päivä kasvissyöjänä"},
        { title: 'joku1', content: "Lajittele kaikki"},
        { title: 'joku2', content: "Osallistuisitko ympäristösemmaan"},
        { title: 'joku3', content: "Keskustele jonkun kanssa"},
    ];

    i = 0;


    handleKeyPress (event) {
        switch(event.key) {
            case 'ArrowLeft':
                console.log('left swipe');
                this.choosingNo();
                break;
            case 'ArrowRight':
                console.log('right swipe');
                this.choosingYes();
                break;
            default:
                break;
        }
    };


    choosingNo(){
        this.setState({ tasks: {...this.state.tasks, [this.state.currentTask]: false}});

        if (this.i < this.cardData.length){
            this.i++;
            this.updateState('i', this.i);
        }
        console.log(this.state.tasks)
        if (this.i < this.cardData.length)
            this.updateState('currentTask', this.cardData[this.state.i].title)

        if (this.i === this.cardData.length){
            this.setState({surveyComplete: true});
        }
        else {
            this.setState({surveyComplete: true});
        }
    }

    choosingYes(){
        this.setState({ tasks: {...this.state.tasks, [this.state.currentTask]: true}});
        if (this.i < this.cardData.length){
            this.i++;
            this.updateState('i', this.i);
        }
        console.log(this.state.tasks)
        if (this.i < this.cardData.length){
            this.updateState('currentTask', this.cardData[this.state.i].title)
        }
        else {
            this.setState({surveyComplete: true});
        }
    }

    updateState(key, value) {
        this.setState({ [key]: value});
    };


    surveyFinished(){
        window.removeEventListener("keydown", this.handleKeyPress);
        this.props.update(this.state)

    }

    render() {
        if (this.i !== this.cardData.length){
            return (
                <div>
                    <div className="stack-container">
                        <div className="card-top card">
                            <div className="text-card-this">{this.cardData[this.state.i].content} </div>
                                <button className="card-button pass" onClick={() => {this.choosingNo()}}>Ei tänään</button>
                                <button className="card-button like" onClick={() => {this.choosingYes()}}>Kyllä, tämän teen!</button>
                        </div>
                        {this.cardData[this.state.i+1]?(<div className="card-middle card">{}</div>):null}
                        {this.cardData[this.state.i+2]?(<div className="card-bottom card">{}</div>):null}
                    </div>
                </div>
            );
        }
        return (
            <div className="stack-container">
                <div className="card-top card">
                <h1 className="nothing-left text-center my-auto">Ei tällä hetkellä enempää haasteita,
                    ehdota meille helppoja arkipäivän ympäristöhaasteita</h1>
                </div>
            </div>

        );
    }
}

export default ActionCards;
