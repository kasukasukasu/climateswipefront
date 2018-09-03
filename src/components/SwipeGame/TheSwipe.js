import React, {Component} from "react";
import {fetchall, fetchallchoices,} from "../../RestFunctions";
import SwipeMap from "./SwipeMap";
import './ItemDetailCards.css';

var shuffle = require('shuffle-array');


class TheSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: this.props.user,
            tasks: [],
            index: 0,
            open:false
        }
    }

    componentDidMount() {
        this.getAll();
        console.log("hei");

    }

    getAll() {
        console.log(this.props.user);
        console.log("moi");
        fetchall(this.getAllRelations.bind(this))
    }

    getAllRelations(datatasks) {
        console.log(this.state);
        fetchallchoices(this.allChoices.bind(this, datatasks))
    }

    allChoices (tasksdata, relationsdata)
    {
        var relations = relationsdata;
        var tasks;
        tasks = tasksdata;
        console.log("Saatiinko dataa?");
        console.log(relations);
        console.log(tasks);
        for (let i = 0; i<relations.length; i++) {
            let relation = relations[i];
            console.log("relation", relation);
            for (let j = 0; j<tasks.length; j++) {
                let task = tasks[j];
                console.log("task:", task);
                console.log(this.state);
                console.log(relation.task.id, task.id, relation.user.uid, this.props.user);
                if (relation.task.id === task.id && relation.user.uid === this.props.user) {
                    console.log("itkettää");
                    tasks.splice(j, 1);
                }
            }
        }
        this.allFetched(tasks);
    };

    //sets fetched tasks to this.state
    allFetched = (data) => {
        shuffle(data);
        console.log("KOHTA LAITETAAN DATAA!!!");
        console.log(data);
        this.setState({tasks: data});
        // console.log(data);
    };

    goToNext = (user_id, task, choice) => {
        this.setState({index: (this.state.index + 1) % this.state.tasks.length});
        // console.log('The link was clicked.');
        // var data = ({choice: choice, user_id: user_id, task_id: task.id});
        // console.log(data);
        // console.log(task);
        // createRelation(data);
    };


    render() {
        // const item = this.state.tasks[this.state.index];
        // console.log(this.props);
        if (this.state.index + 1 !== this.state.tasks.length) {
            return (
                <div className="theswipe">
                    <SwipeMap item={this.state.tasks} index={this.state.index} user={this.props.user} goToNext={this.goToNext.bind(this)}/>
                    {/*<div className="buttons">*/}
                    {/*<button className="card-button pass"*/}
                            {/*onClick={this.goToNext.bind(this, this.props.user, this.state.tasks[this.state.index], "0")}>Ei</button>*/}
                    {/*<button className="card-button like"*/}
                            {/*onClick={this.goToNext.bind(this, this.props.user, this.state.tasks[this.state.index], "1")}>Kyllä</button>*/}
                    {/*</div>*/}
                </div>
            );
        } else {
            return (
                <div className="stack-container">
                    <h1>Ei tällä hetkellä enempää haasteita,
                        ehdota meille helppoja arkipäivän ympäristöhaasteita</h1>
                    <p>Lähetä meille uusi haastevaihtoehto arvioitavaksi: teamclimateswipe@gmail.com
                    </p>
                </div>
            );
        }
    }
}

export default TheSwipe;