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
            authenticated: this.props.user,
            tasks: [],
            index: 0,
            open: false
        }
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        fetchall(this.getAllRelations.bind(this))
    }

    getAllRelations(datatasks) {
        fetchallchoices(this.allChoices.bind(this, datatasks))
    }

    allChoices(tasksdata, relationsdata) {
        var relations = relationsdata;
        var tasks;
        tasks = tasksdata;
        for (let i = 0; i < relations.length; i++) {
            let relation = relations[i];
            for (let j = 0; j < tasks.length; j++) {
                let task = tasks[j];
                if (relation.task.id === task.id && relation.user.uid === this.props.user) {
                    tasks.splice(j, 1);
                }
            }
        }
        this.allFetched(tasks);
    };

    //sets fetched tasks to this.state
    allFetched = (data) => {
        shuffle(data);
        this.setState({tasks: data});
    };

    goToNext = (user_id, task, choice) => {
        this.setState({index: (this.state.index + 1) % this.state.tasks.length});
    };

    render() {
        if ( this.state.index + 1 !== this.state.tasks.length) {
            return (
                <div className="theswipe">
                    <SwipeMap item={this.state.tasks} index={this.state.index} user={this.props.user}
                              goToNext={this.goToNext.bind(this)} authentication={this.props.authentication}/>
                </div>
            );
        } else {
            return (
                <div className="stack-container">
                    <h1>Ei tällä hetkellä enempää haasteita, ehdota meille helppoja arkipäivän ympäristöhaasteita</h1>
                    <p>Lähetä meille uusi haastevaihtoehto arvioitavaksi: teamclimatechoice@gmail.com</p>
                </div>
            );
        }
    }
}

export default TheSwipe;