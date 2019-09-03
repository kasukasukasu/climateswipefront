import React, {Component} from "react";
import {fetchall, fetchallchoices,} from "../../RestFunctions";
import SwipeMap from "./SwipeMap";
import './ItemDetailCards.css';
import GameHeader from "./GameHeader";
var shuffle = require('shuffle-array');

class TheSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: this.props.user,
            authenticated: this.props.user,
            tasks: [],
            index: 0,
            open: false,
            count: 0,
            percentage: 100,
            relations: [{choice:'', task: {title:'', content1: '', content2:'', rating: ''}}]
        }
    }

    componentDidMount() {
        this.getAll();
        this.getAllForCount();
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

    getAllForCount() {
        if(this.props.authentication) {
            fetchallchoices(this.allchoicesFetched);
        } else {}
    }

    //sets fetched tasks to this.state
    allchoicesFetched = (data) => {
        if(data.length === 0) {
            this.setState({count: 0});
        } else {
            var count = 0;
            data.filter(addToList => {
                return addToList.choice === "1" && addToList.user.uid === this.props.user
            }).map(function (choice) {

                count += parseInt(choice.task.rating, 10);

            });
            var percentage = ((10300-count)/10300*100);
            this.setState({count: count, percentage: percentage});
        }
    };

    //sets fetched tasks to this.state
    allFetched = (data) => {
        shuffle(data);
        this.setState({tasks: data});
    };

    goToNext = (user_id, task, choice) => {
        this.setState({index: (this.state.index + 1) % this.state.tasks.length});
    };

    countingIfNotAuth(rating, choice) {
        var sum = this.state.count;
        if (choice === "1") {
            sum += parseInt(rating, 10);
        } else {
            sum += 0;
        }
        var percentage = ((10300-sum)/10300*100);
        this.setState({count: sum, percentage: percentage});

    }

    render() {
            if ( this.state.index + 1 !== this.state.tasks.length) {
                return (
                    <div className="theswipe">
                        <GameHeader count={this.state.count} percentage={this.state.percentage} authentication={this.props.authentication}/>
                        <SwipeMap item={this.state.tasks} index={this.state.index} user={this.props.user}
                                  goToNext={this.goToNext.bind(this)} authentication={this.props.authentication} counting={this.countingIfNotAuth.bind(this)}/>
                    </div>

                );
            } else {
                return (
                    <div className="stack-container">
                        <h1>Ei tällä hetkellä enempää haasteita,
                            ehdota meille helppoja arkipäivän ympäristöhaasteita</h1>
                        <p>Lähetä meille uusi haastevaihtoehto arvioitavaksi: teamclimatechoice@gmail.com
                        </p>
                    </div>
                );
            }
        }
}

export default TheSwipe;