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
        // console.log("hei");

    }

    getAll() {
        // console.log(this.props.user);
        // console.log("moi");
        fetchall(this.getAllRelations.bind(this))
    }

    getAllRelations(datatasks) {
        // console.log(this.state);
        fetchallchoices(this.allChoices.bind(this, datatasks))
    }

    allChoices(tasksdata, relationsdata) {
        var relations = relationsdata;
        var tasks;
        tasks = tasksdata;
        // console.log("Saatiinko dataa?");
        // console.log(relations);
        // console.log(tasks);
        for (let i = 0; i < relations.length; i++) {
            let relation = relations[i];
            for (let j = 0; j < tasks.length; j++) {
                let task = tasks[j];

                // console.log("task:", task);
                // console.log(this.state);
                // console.log(relation.task.id, task.id, relation.user.uid, this.props.user);
                if (relation.task.id === task.id && relation.user.uid === this.props.user) {
                    console.log("itkettää");
                    tasks.splice(j, 1);
                }
            }
        }
        this.allFetched(tasks);
    };


    getAllForCount() {
        if(this.props.authentication) {
            fetchallchoices(this.allchoicesFetched);
            console.log("jau")
        } else {
            console.log('ei kirjautunut');
        }
    }

    //sets fetched tasks to this.state
    allchoicesFetched = (data) => {
        if(data.length === 0) {
            this.setState({count: 0});
        } else {
            console.log('moroo3');
            var count = 0;
            var relations = data.filter(addToList => {
                return addToList.choice === "1" && addToList.user.uid === this.props.user
            }).map(function (choice) {
                console.log('moroo5', choice);
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
        console.log(this.state);
        if (choice === "1") {
            sum += parseInt(rating);
        } else {
            sum += 0;
        }
        var percentage = ((10300-sum)/10300*100);
        console.log("mööööö");
        this.setState({count: sum, percentage: percentage});
        console.log(this.state);
    }

    render() {
        // const item = this.state.tasks[this.state.index];
        // console.log(this.props);
        // console.log(this.props.authentication);
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